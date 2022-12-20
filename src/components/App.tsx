import { ContextMenu } from './contextMenu/ContextMenu'

function App() {
	return (
		<div className='App'>
			<ContextMenu
				x={16}
				y={16}
				items={[
					{ type: 'normal', label: 'Normal', action: () => null, icon: '👍' },
					{ type: 'disabled', label: 'Disabled', icon: '😳' },
					{
						type: 'submenu',
						label: 'Submenu',
						icon: '🚀',
						items: [
							{
								type: 'normal',
								label: 'NormalNormalNormalNormalNormalNormalNormal',
								action: () => null,
							},
							{ type: 'disabled', label: 'Disabled' },
							{
								type: 'submenu',
								label: 'Submenu',
								items: [
									{
										type: 'normal',
										label: 'Normal',
										action: () => null,
									},
									{ type: 'disabled', label: 'Disabled' },
									{ type: 'separator' },
									{ type: 'danger', label: 'Danger', action: () => null },
								],
							},
							{ type: 'separator' },
							{ type: 'danger', label: 'Danger', action: () => null },
							{
								type: 'submenu',
								label: 'Submenu',
								items: [
									{ type: 'normal', label: 'Normal', action: () => null },
									{ type: 'disabled', label: 'Disabled' },
									{ type: 'separator' },
									{ type: 'danger', label: 'Danger', action: () => null },
								],
							},
						],
					},
					{ type: 'separator' },
					{ type: 'danger', label: 'Danger', action: () => null, icon: '🚨' },
				]}
			/>
		</div>
	)
}

export default App
