import * as React from 'react'
import ListItem from './ListItem'
import { Ppl } from '../interfaces'

type Props = {
  items: Ppl[]
}

const List = ({ items }: Props) => (
  <ul>
    {items?.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
