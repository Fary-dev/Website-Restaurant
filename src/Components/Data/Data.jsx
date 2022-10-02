import { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetching() {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data?.message);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetching();
  }, [url]);
  return { data, loading, error };
}

// const Button = styled.a`
//   display: block;
//   font-size: 0.7rem;
//   font-weight: 600;
//   letter-spacing: 0.05rem;
//   text-transform: uppercase;
//   text-decoration: none;
//   background-color: transparent;
//   padding: 15px 25px;
//   cursor: pointer;
//   border: 2px solid ${({ theme }) => theme.primaryColor};
//   border-radius: 5px;
//   margin-top: 25px;
//   &:hover {
//     background-color: ${({ theme }) => theme.primaryColor};
//   }
// `;
// export default function Video() {
//   const url = "https://dog.ceo/api/breed/labrador/images/random/10";
//   const { data, loading, error } = DataFetch(url);

//   if (loading) return <h1> loading...</h1>;

//   if (error) return <h1>{error}</h1>;

//   return (
//     <>
//       <Button onClick={() => alert(data)}>Fetching Data</Button>
//       <img src={"data?.message[1]"} alt="dog" />
//     </>
//   );
// }
