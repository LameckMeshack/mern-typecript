import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useEffect, useReducer } from "react";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import axios from "axios";
import { Product } from "../types/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";

export default function HomePage() {
  type State = { products: Product[]; loading: boolean; error: string };

  type Action =
    | { type: "FETCH_REQUEST" }
    | { type: "FETCH_SUCCESS"; payload: Product[] }
    | { type: "FETCH_ERROR"; payload: string };

  const initialState: State = {
    products: [],
    loading: true,
    error: "",
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true, error: "" };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, products: action.payload };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [{ products, loading, error }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get<Product[]>("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: getError(err as ApiError) });
      }
    };
    fetchProducts();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Row>
      {products.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}
