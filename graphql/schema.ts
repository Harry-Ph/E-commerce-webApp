import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";

use(prisma({ features: { crud: true } }));

schema.objectType({
  name: "Ppl",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});

schema.objectType({
  name: "Product",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});

schema.queryType({
  definition(t) {
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
      resolve(_parent, _args, ctx) {
        console.log(ctx.db)
        return ctx.db.product.findMany({});
      },
    });

    t.crud.product();
    t.crud.products();
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

    t.field("productMutation", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.db.product.deleteMany({});
        return `${count} user(s) destroyed. Thanos will be proud.`;
      },
    });

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
