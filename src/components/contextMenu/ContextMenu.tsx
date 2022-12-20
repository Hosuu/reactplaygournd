import { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import { ContextMenuData } from './@types'
import { ContextMenuItem } from './ContextMenuItem'

interface ContextMenuProps extends ContextMenuData {}

const ContextMenuWrapper = styled.div<{ x: number; y: number }>`
	position: fixed;
	left: ${({ x }) => x}px;
	top: ${({ y }) => y}px;
	z-index: 999;

	display: flex;
	flex-direction: column;

	padding: 8px;
	border-radius: 8px;

	border: 1px solid #222;
	background: rgba(21, 21, 21, 0.8);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(3px);

	user-select: none;
`

export const ContextMenu: FC<ContextMenuProps> = ({ x, y, items }) => {
	const wrapperRef = useRef<HTMLDivElement>(null)

	const [subMenuIdx, setSubMenuIdx] = useState(-1)
	//❓ zeby submeu sie chowaly przy otwarciu nowego
	// Mozna w sumie by zrobic z cotnextAPI gdzie kazdy <ContextMenu />
	// Byl by providerem kontrolujacym jego mozliwe submenu
	// Ale nie wiem czy warto zamiast po prostu 2 komponenty prop drillowac???

	const [offsetX, setOffsetX] = useState(0)
	const [offsetY, setOffsetY] = useState(0)

	// Confine context menu to browser window
	// useLayoutEffect(() => {
	// 	// Horizontal X axis
	// 	const width = wrapperRef.current!.offsetWidth
	// 	if (x < 0) setOffsetX(-x)
	// 	else if (x + width > innerWidth) setOffsetX(-width)

	// 	// Vertical Y axis
	// 	const height = wrapperRef.current!.offsetHeight
	// 	if (y < 0) setOffsetY(-y)
	// 	else if (y + height > innerHeight) setOffsetY(innerHeight - (y + height))
	// }, [x, y])

	//❓ ^^^ Zeby context menu nie wyjebalo poza ekran ale to rozwiazanie jest chujowe i dalej mysle nad lepszym

	return (
		<ContextMenuWrapper ref={wrapperRef} x={x + offsetX} y={y + offsetY}>
			{items.map((itemData, i) => (
				<ContextMenuItem
					key={Math.random()} //❓ przy i sie devtoolsy pierdola bo 2 takie same komponenty maja ten sam klucz ¯\_(ツ)_/¯
					itemData={itemData}
					isSubMenuBlocked={i !== subMenuIdx}
					setSubMenuIdx={setSubMenuIdx}
					idx={i}
				/>
			))}
		</ContextMenuWrapper>
	)
}
