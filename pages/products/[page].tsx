import {GetStaticPaths} from "next";
import Products, {getStaticProps} from './index'

export default Products;
export {getStaticProps}

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
  return {
    paths: [
      { params: { page: "1" } },
      // { params: { page: "2" } },
      // { params: { page: "3" } },
    ],
    fallback: true,
  };
};
