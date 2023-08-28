import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Buttons from './Buttons';
import Cadastro from './Cadastro';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function TableCustomer ( {props, actualizeTable} ) {

  return (
    <>
        <Cadastro actualizeTable={actualizeTable}/>
        <br/>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Nome</StyledTableCell>
                <StyledTableCell align="center">Sobrenome</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Logradouro</StyledTableCell>
                <StyledTableCell align="center">cep</StyledTableCell>
                <StyledTableCell align="center">Ações</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.map((row) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.nome}</StyledTableCell>
                <StyledTableCell align="center">{row.sobrenome}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.logradouro}</StyledTableCell>
                <StyledTableCell align="center">{row.cep}</StyledTableCell>
                <StyledTableCell align="center"><Buttons id={row.id} actualizeTable={actualizeTable}></Buttons></StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  );
}
