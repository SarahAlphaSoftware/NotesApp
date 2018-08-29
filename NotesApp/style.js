
A5.themes.add('NotesApp',{
	panelCard: {
		base: {
			className: 'NotesAppPanel',
			header: {className: 'NotesAppPanelHeader'},
			body: {className: 'NotesAppPanelBody NotesAppNBoardPanelBody'},
			footer: {className: 'NotesAppPanelFooter'}
		},
		boards: {
			className: 'NotesAppBoardsPanel',
			header: {className: 'NotesAppBoardsPanelHeader'},
			body: {className: 'NotesAppBoardsPanelBody'},
			footer: {className: 'NotesAppBoardsPanelFooter'}
		},
		edit: {
			className: 'NotesAppEditPanel',
			header: {className: 'NotesAppEditPanelHeader'},
			body: {className: 'NotesAppEditPanelBody'},
			footer: {className: 'NotesAppEditPanelFooter'}
		}
	},
	panelNavigator: {
		base: {
			className: '',
			header: {className: 'NotesAppPanelHeader'},
			body: {className: 'NotesAppPanelBody'},
			footer: {className: 'NotesAppPanelFooter'},
			indicator: {
				className: 'NotesAppPanelNavInd',
				panelClassName: 'NotesAppPanelNavIndButton',
				panelSelectedClassName: 'NotesAppPanelNavIndButtonSelected'
			}
		}
	},
	panelLayout: {
		base: {
			className: '',
			header: {className: 'NotesAppPanelHeader'},
			body: {className: 'NotesAppPanelBody'},
			footer: {className: 'NotesAppPanelFooter'}
		}
	},
	window: {
		base: {
			className: 'NotesAppWin',
			outerWrapClassName: 'NotesAppWinWrapper',
			title: {className: 'NotesAppWinTitle'},
			body: {className: 'NotesAppWinBody'},
			buttons: {className: 'NotesAppWinButtons'},
			_defaultTools: {
				'close': {}
			}
		}
	},
	listbox: {
		base: {
			item: {
				className: 'NotesAppNoteListItem'
			}
		},
		boards: {
			item: {
				className: 'NotesAppBoardsListItem',
				selectedClassName: 'NotesAppBoardsListItemSelected',
				titleClassName: 'NotesAppBoardsListTitle',
				separatorClassName: 'NotesAppBoardsListSeparator'
			},
			content: {
				footer: {className: 'NotesAppBoardsListFooter'}
			}
		},
		color: {
			item: {
				className: 'NotesAppColorListItem',
				selectedClassName: 'NotesAppColorListItemSelected'
			}
		}
	},
	spinList: {
		base: {
			className: 'NotesAppSpinList',
			item: {className: 'NotesAppSpinListItem'}
		}
	},
	button: {
		base: {
			className: 'NotesAppButton',
			pressedClassName: 'NotesAppButtonPressed',
			disabledClassName: 'NotesAppButtonDisabled'
		},
		imgButton: {
			className: 'NotesAppImgButton',
			pressedClassName: 'NotesAppImgButtonPressed',
			disabledClassName: 'NotesAppImgButtonDisabled'
		}
	},
	scroll: {
		base: {
			indicator: {
				h: {className: 'NotesAppScrollIndH', barClassName: 'NotesAppScrollIndHBar'},
				v: {className: 'NotesAppScrollIndV', barClassName: 'NotesAppScrollIndVBar'}
			}
		}
	}
});