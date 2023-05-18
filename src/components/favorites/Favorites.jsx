// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button } from "@mui/material";
// import { useFavorite } from "../../contexts/FavoriteContextProvider";

// export default function Cart() {
//   const { getFavorite, favorite, deleteFavoriteProduct } = useFavorite();

//   React.useEffect(() => {
//     getFavorite();
//   }, []);

//   // функция удаляет элемент из локального хранилища
//   const favoriteCleaner = () => {
//     // removeItem является методом для удаления из локального хранилища
//     localStorage.removeItem("favorite");
//     getFavorite();
//   };

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [&.${tableCellClasses.head}]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [&.${tableCellClasses.body}]: {
//       fontSize: 14,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   }));

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 500 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Picture</TableCell>
//             <TableCell align="right">Name</TableCell>
//             <TableCell align="right">Type</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {favorite?.products.map((row) => (
//             <TableRow
//               key={row.item.id}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {/* item внутри объекта row содержит информацию о конкретном продукте и поэтому мы используем его */}
//                 <img src={row.item.picture} width="70" height="70" alt="kj" />
//               </TableCell>
//               <TableCell align="right">{row.item.name}</TableCell>
//               <TableCell align="right">{row.item.type}</TableCell>
//               <TableCell align="right">{row.item.descriptiom}</TableCell>

//               <TableCell align="right">
//                 <button onClick={() => deleteFavoriteProduct(row.item.id)}>
//                   DELETE
//                 </button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
