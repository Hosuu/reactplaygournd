import { FC, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ContextMenuItemSubMenuData } from './@types'
import { ContextMenu } from './ContextMenu'

interface ContextMenuSubMenuItemProps {
	itemData: ContextMenuItemSubMenuData
	isSubMenuBlocked: boolean
	setSubMenuIdx: (...props: any[]) => void
	idx: number
}

const ContextMenuSubMenuItemWrapper = styled.div`
	padding: 8px;
	border-radius: 4px;

	display: flex;
	gap: 8px;

	white-space: nowrap;

	color: #ccc;

	&.extended {
		background: rgba(14, 14, 14, 0.4);
	}

	&:hover {
		color: #fff;
		background: rgba(14, 14, 14, 0.75);
	}
`

export const ContextMenuSubMenuItem: FC<ContextMenuSubMenuItemProps> = ({
	itemData: { label, items, icon },
	isSubMenuBlocked,
	setSubMenuIdx,
	idx,
}) => {
	const [displaySubMenu, setDisplaySubMenu] = useState(false)

	const subMenuItemRef = useRef<HTMLDivElement>(null)
	const currentTimeoutId = useRef(0)

	const onMouseEnterHandler = () => {
		if (currentTimeoutId.current) clearTimeout(currentTimeoutId.current)
		setSubMenuIdx(idx)
		setDisplaySubMenu(true)
	}

	const onMouseLeaveHandler = () => {
		currentTimeoutId.current = setTimeout(() => setDisplaySubMenu(false), 1000)
	}

	const getMenuX = () =>
		subMenuItemRef.current!.offsetLeft + subMenuItemRef.current!.offsetWidth + 8
	const getMenuY = () => subMenuItemRef.current!.offsetTop - 9

	const showSubMenu = displaySubMenu && !isSubMenuBlocked

	useLayoutEffect(() => {
		if (showSubMenu) subMenuItemRef.current?.classList.add('extended')
		else subMenuItemRef.current?.classList.remove('extended')
	}, [displaySubMenu])

	return (
		<ContextMenuSubMenuItemWrapper
			ref={subMenuItemRef}
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}>
			{icon ?? null}
			<p>{label}</p>
			<p style={{ paddingLeft: '8px', marginLeft: 'auto' }}>&gt;</p>
			{showSubMenu ? <ContextMenu x={getMenuX()} y={getMenuY()} items={items} /> : null}
		</ContextMenuSubMenuItemWrapper>
	)
}
