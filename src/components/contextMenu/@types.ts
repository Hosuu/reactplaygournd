import { ReactNode } from 'react'

export interface ContextMenuData {
	x: number
	y: number
	items: ContextMenuItemData[]
}

export type ContextMenuItemData =
	| ContextMenuItemActiveData
	| ContextMenuItemDisabledData
	| ContextMenuItemSeparatorData
	| ContextMenuItemSubMenuData

export interface ContextMenuItemSubMenuData {
	type: 'submenu'
	label: string
	items: ContextMenuItemData[]
	icon?: ReactNode
}

interface ContextMenuItemActiveData {
	type: 'normal' | 'danger'
	label: string
	action: (...param: any[]) => void
	icon?: ReactNode
}

interface ContextMenuItemDisabledData {
	type: 'disabled'
	label: string
	action?: (...param: any[]) => void
	icon?: ReactNode
}

interface ContextMenuItemSeparatorData {
	type: 'separator'
}
