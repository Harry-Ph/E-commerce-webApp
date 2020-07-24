import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import { idArg, stringArg } from "nexus/components/schema";
import { PrismaClient } from 'nexus-plugin-prisma/client'
import {arg} from "nexus/dist/lib/cli";

use(prisma({ features: { crud: true } }));

// use(
//   prisma({
//     client: { instance: new PrismaClient() },
//   })
// )

schema.objectType({
  name: "Ppl",
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.email();
    t.model.password();
    t.model.role();
    t.model.status();
  },
});

schema.objectType({
  name: "Product",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});

schema.addToContext(_req => {
  return {
    customReq: _req,
  }
})


schema.queryType({
  async definition(t) {
    t.list.field("allUsers", {
      type: "Ppl",
      resolve(_parent, _args, ctx) {
        return ctx.db.ppl.findMany({});
      },
    });

    t.crud.ppl();
    t.crud.ppls();

    t.list.field("allProducts", {
      type: "Product",
      args: {
        skip: schema.stringArg({nullable: true}),
        take: schema.stringArg({nullable: true}),
      },
      resolve(_parent, _args, ctx) {
        console.log(_args.skip, _args.take)
        console.log(333)
        return ctx.db.product.findMany({
          skip: parseInt(_args?.skip!),
          take: parseInt(_args?.take!),
        });
      },
    });

    t.list.field("product", {
      type: "Product",
      args: { queryStr: schema.stringArg({nullable: true})},
      resolve: async(_parent, _args, ctx) => {
        try {
          const product = await ctx.db.product.findMany({
            where: {
              OR: [
                { id: _args?.queryStr! },
                { name: _args?.queryStr! },
              ],
            },
          });
          // const product = t.crud.product(_args?.id!.toString() as ProductWhereUniqueInput);
          return product;
        } catch (error) {
          throw  new Error(error)
        }

    }
  });

    // t.crud.product();
    // t.crud.products();
  },
});

schema.mutationType({
  definition(t) {
    t.field("bigRedButton", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.db.ppl.deleteMany({});
        return `${count} user(s) destroyed. Thanos will be proud.`;
      },
    });

    t.crud.createOnePpl();
    t.crud.deleteOnePpl();
    t.crud.deleteManyPpl();
    t.crud.updateOnePpl();
    t.crud.updateManyPpl();

    t.field("removeAllProducts", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        try {
          const { count } = await ctx.db.product.deleteMany({});
          return `${count} product(s) destroyed.`;
        } catch (e) {
          throw  new Error(e)
        }
      },
    });

    // t.field("removeManyProducts", {
    //   type: "String",
    //   args: {
    //     data: arg({Product[]})
    //   },
    //   async resolve(_parent, _args, ctx) {
    //     try {
    //       const { count } = await ctx.db.product.deleteMany({});
    //       return `${count} product(s) destroyed.`;
    //     } catch (e) {
    //       throw  new Error(e)
    //     }
    //   },
    // });

    t.field('removeProductById', {
      type: 'Product',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve(parent, {id}, ctx) {
        try {
          return ctx.db.product.delete({
            where: {
              id: id!
            }
          })
        } catch (e) {
          throw  new Error(e)
        }
      }
    })

    t.field('updateProductById', {
      type: 'Product',
      nullable: true,
      args: {
        id: idArg(),
        name: stringArg()
      },
      resolve(parent, {id, name}, ctx) {
        try {
          return ctx.db.product.update({
            where: {
              id: id!
            },
            data: {
              name: name!
            }
          })
        } catch (e) {
          throw  new Error(e)
        }
      }
    })

    t.field('createNewOneProduct', {
      type: 'Product',
      nullable: true,
      args: {
        name: stringArg(),
      },
      resolve(parent, {name}, ctx) {
        try {
          return ctx.db.product.create({
            data: {
              name: name!
            }
          })
        } catch (e) {
          throw  new Error(e)
        }
      }
    })

    t.crud.createOneProduct();
    t.crud.deleteOneProduct();
    t.crud.deleteManyProduct();
    t.crud.updateOneProduct();
    t.crud.updateManyProduct();
  },
});

// schema.mutationType({
//   definition(t) {
//     t.field("bigRedButton", {
//       type: "String",
//       async resolve(_parent, _args, ctx) {
//         const { count } = await ctx.db.ppl.deleteMany({});
//         return `${count} user(s) destroyed. Thanos will be proud.`;
//       },
//     });
//
//     t.crud.createOnePpl();
//     t.crud.deleteOnePpl();
//     t.crud.deleteManyPpl();
//     t.crud.updateOnePpl();
//     t.crud.updateManyPpl();
//   },
// });
