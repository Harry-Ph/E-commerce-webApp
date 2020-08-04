import React from 'react'

import { Ppl } from '../../interfaces'
import Table from '@material-ui/core/Table'

import { makeStyles, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import Link from "next/link";

type Props = {
    items: Ppl[]
  }

const useStyles = makeStyles({
    table: {
      maxWidth: 650,
      margin: '0  auto'
    },
  });
  
export interface ITableProps {}

const TableComponent = ({ items }: Props) => {
  const classes = useStyles()

  return (
    <TableContainer>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>USERNAME</TableCell>
                <TableCell align="right">EMAIL</TableCell>
                <TableCell align="right">ROLE</TableCell>
                <TableCell align="right">STATUS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items?.map((row) => (
                  <Link href={`/users/detail?id=${row.id}`}>
                    <TableRow>
                      <TableCell component="th" scope="row">{row.username}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.role}</TableCell>
                      <TableCell align="right">{row.status ? 'Activated' : 'Deactivated'}</TableCell>
                    </TableRow>
                  </Link>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableComponent
