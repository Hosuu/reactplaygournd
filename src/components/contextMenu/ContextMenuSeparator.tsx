import { FC } from 'react'
import styled from 'styled-components'

interface ContextMenuSeparatorProps {}

const ContextMenuSeparatorWrapper = styled.div`
	width: 100%;
	padding: 4px;
`
const ContextMenuSeparatorBar = styled.div`
	width: 100%;
	height: 2px;
	border-radius: 2px;
	background: #444;
`

export const ContextMenuSeparator: FC<ContextMenuSeparatorProps> = ({}) => {
	return <ContextMenuSeparatorWrapper children={<ContextMenuSeparatorBar />} />
}
