import { FC } from 'react'
import styled from 'styled-components'
import { ContextMenuItemData } from './@types'
import { ContextMenuSeparator } from './ContextMenuSeparator'
import { ContextMenuSubMenuItem } from './ContextMenuSubMenuItem'

interface ContextMenuItemProps {
	itemData: ContextMenuItemData
	isSubMenuBlocked: boolean
	setSubMenuIdx: (...props: any[]) => void
	idx: number
}

interface styleMappings {
	normal: string
	danger: string
	disabled: string
}

const colorMappings: styleMappings = {
	normal: '#ccc',
	disabled: '#666',
	danger: '#B13D3D',
}
const hoverColorMappings: styleMappings = {
	normal: '#fff',
	disabled: '#666',
	danger: '#ccc',
}
const hoverBgMappings: styleMappings = {
	normal: 'rgba(14, 14, 14, 0.8)',
	disabled: 'none',
	danger: 'rgba(119, 33, 33, 0.8);',
}

const ContextMenuItemWrapper = styled.div<{ type: 'normal' | 'danger' | 'disabled' }>`
	padding: 8px;
	border-radius: 4px;

	display: flex;
	gap: 8px;

	white-space: nowrap;

	color: ${({ type }) => colorMappings[type]};
	${({ type }) => (type !== 'disabled' ? 'cursor: pointer;' : null)}

	&:hover {
		color: ${({ type }) => hoverColorMappings[type]};
		background: ${({ type }) => hoverBgMappings[type]};
	}
`

export const ContextMenuItem: FC<ContextMenuItemProps> = ({
	itemData,
	isSubMenuBlocked,
	setSubMenuIdx,
	idx,
}) => {
	if (itemData.type === 'separator') return <ContextMenuSeparator />

	if (itemData.type === 'submenu')
		return (
			<ContextMenuSubMenuItem
				itemData={itemData}
				isSubMenuBlocked={isSubMenuBlocked}
				setSubMenuIdx={setSubMenuIdx}
				idx={idx}
			/>
		)

	const { label, type, action, icon } = itemData

	return (
		<ContextMenuItemWrapper
			type={type}
			onClick={(...params) => {
				if (type === 'disabled') return
				action(...params)
				//HideContextMenu
				//❓ To sie bedzie odwolywac do glownego ContextAPI ktore kontroluje wszystkie menu + je renderuje
			}}>
			{icon ?? null} <p>{label}</p>
		</ContextMenuItemWrapper>
	)
}
