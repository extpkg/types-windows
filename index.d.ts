/** EXT windows module. */
declare namespace ext.windows {

  /** Window point structure. */
  export interface ExtWindowPoint {
    x: number
    y: number
  }

  /** Window size structure. */
  export interface ExtWindowSize {
    width: number
    height: number
  }

  /** Window rectangle structure. */
  export interface ExtWindowRectangle {
    x: number
    y: number
    width: number
    height: number
  }

  /** Window object. */
  export interface ExtWindow {
    /** Window ID. */
    id: string 
    /** Owning extension ID. */
    extension: string
    minWidth?: number
    minHeight?: number
    maxWidth?: number
    maxHeight?: number
    resizable: boolean
    movable: boolean
    minimizable: boolean
    maximizable: boolean
    closable: boolean
    focusable: boolean
    alwaysOnTop: boolean
    fullscreenable: boolean
    title: string
    visible: boolean
    parent?: string
    modal: boolean
    autoHideMenu: boolean
    backgroundColor: string
    shadow: boolean
    opacity: number
    vibrancy: boolean
  }

  /** Window creation properties. */
  export interface ExtWindowProperties {
    width?: number
    height?: number
    position?: ExtWindowPoint
    useContentSize?: boolean
    center?: boolean
    minWidth?: number
    minHeight?: number
    maxWidth?: number
    maxHeight?: number
    resizable?: boolean
    movable?: boolean
    minimizable?: boolean
    maximizable?: boolean
    closable?: boolean
    focusable?: boolean
    alwaysOnTop?: boolean
    fullscreen?: boolean
    fullscreenable?: boolean
    skipTaskbar?: boolean
    title?: string
    icon?: string
    visible?: boolean
    frame?: boolean
    parent?: string
    modal?: boolean
    autoHideCursor?: boolean
    autoHideMenu?: boolean
    backgroundColor?: string
    shadow?: boolean
    opacity?: number
    transparent?: boolean
    titleBarStyle?: 'inset' | 'hidden'
    titleButtonsPosition?: ExtWindowPoint
    roundedCorners?: boolean
    focused?: boolean
    maximized?: boolean
    minimized?: boolean
    enabled?: boolean
    aspectRatio?: number
    menuVisible?: boolean
    flashing?: boolean
    vibrancy?: boolean
    backgroundCSS?: string
  }

  /** Window update properties. */
  export interface ExtWindowUpdate {
    width?: number
    height?: number
    position?: ExtWindowPoint
    useContentSize?: boolean
    center?: boolean
    minWidth?: number
    minHeight?: number
    maxWidth?: number
    maxHeight?: number
    resizable?: boolean
    movable?: boolean
    minimizable?: boolean
    maximizable?: boolean
    closable?: boolean
    focusable?: boolean
    alwaysOnTop?: boolean
    fullscreen?: boolean
    fullscreenable?: boolean
    skipTaskbar?: boolean
    title?: string
    icon?: string
    visible?: boolean
    parent?: string | null
    autoHideCursor?: boolean
    autoHideMenuBar?: boolean
    backgroundColor?: string
    shadow?: boolean
    opacity?: number
    titleButtonsPosition?: ExtWindowPoint
    focused?: boolean
    maximized?: boolean
    minimized?: boolean
    enabled?: boolean
    aspectRatio?: number | null
    menuBarVisible?: boolean
    flashing?: boolean
    vibrancy?: boolean
  }

  /** Menu item properties. */
  export interface ExtWindowMenuItem {
    role?: (
      'undo' | 'about' | 'redo' | 'cut' | 'copy' | 'paste' |'pasteAndMatchStyle' |
      'selectAll' | 'delete' | 'minimize' | 'close' | 'quit' | 'reload' | 'forceReload' |
      'toggleDevTools' | 'togglefullscreen' | 'resetZoom' | 'zoomIn' | 'zoomOut' |
      'toggleSpellChecker' | 'fileMenu' | 'editMenu' | 'viewMenu' | 'windowMenu'
    )
    type?: 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio'
    label?: string
    sublabel?: string
    tooltip?: string
    accelerator?: string
    icon?: string
    enabled?: boolean
    acceleratorWorksWhenHidden?: boolean
    visible?: boolean
    checked?: boolean
    registerAccelerator?: boolean
    submenu?: ExtWindowMenuItem[]
    tag?: string
  }

  /** Window ID. */
  export interface ExtWindowId {
    /** Window ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Window event. */
  export interface ExtWindowEvent {
    /** Window ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Menu item clicked. */
  export interface ExtWindowEventMenuClicked {
    /** Menu tag. */
    tag?: string
  }

  /** Event handler. */
  export interface ExtWindowsHandler<Listener> {
    /**
     * Register listener.
     * @param listener Listener to invoke.
     */
    addListener: (listener: Listener) => void
    /**
     * Unregister listener.
     * @param listener Listener to unregister.
     */
    removeListener: (listener: Listener) => void
  }

  // Generic
  export function get(windowId: string): Promise<ExtWindow>
  export function query(filter?: Partial<ExtWindow>): Promise<ExtWindow[]>
  export function create(properties?: ExtWindowProperties): Promise<ExtWindow>
  export function remove(windowIds: string | string[]): Promise<void> 
  export function update(windowIds: string | string[], properties?: ExtWindowUpdate): Promise<void>

  // State
  export function focus(windowId: string): Promise<void>
  export function unfocus(windowId: string): Promise<void>
  export function isFocused(windowId: string): Promise<boolean>
  export function show(windowId: string, focus?: boolean): Promise<void>
  export function hide(windowId: string): Promise<void>
  export function isVisible(windowId: string): Promise<boolean>
  export function maximize(windowId: string): Promise<void>
  export function unmaximize(windowId: string): Promise<void>
  export function isMaximized(windowId: string): Promise<boolean>
  export function minimize(windowId: string): Promise<void>
  export function restore(windowId: string): Promise<void>
  export function isMinimized(windowId: string): Promise<boolean>
  export function setFullscreen(windowId: string, enabled: boolean): Promise<void>
  export function isFullscreen(windowId: string): Promise<boolean>
  
  // Appearance
  export function setVibrancy(windowId: string, value: boolean): Promise<void>
  export function hasVibrancy(windowId: string): Promise<boolean>
  export function setBackgroundColor(windowId: string, color: string): Promise<void>
  export function getBackgroundColor(windowId: string): Promise<string>
  export function setOpacity(windowId: string, value: number): Promise<void>
  export function getOpacity(windowId: string): Promise<number>
  export function setShadow(windowId: string, value: boolean): Promise<void>
  export function hasShadow(windowId: string): Promise<boolean>
  export function setTitle(windowId: string, title: string): Promise<void>
  export function getTitle(windowId: string): Promise<string>
  export function setTitleButtonsPosition(windowId: string, x: number, y: number): Promise<void>
  export function getTitleButtonsPosition(windowId: string): Promise<ExtWindowPoint>
  export function setEnabled(windowId: string, enabled: boolean): Promise<void>
  export function isEnabled(windowId: string): Promise<boolean>

  // Controls
  export function setResizable(windowId: string, value: boolean): Promise<void>
  export function isResizable(windowId: string): Promise<boolean>
  export function setMovable(windowId: string, value: boolean): Promise<void>
  export function isMovable(windowId: string): Promise<boolean>
  export function setMinimizable(windowId: string, value: boolean): Promise<void>
  export function isMinimizable(windowId: string): Promise<boolean>
  export function setMaximizable(windowId: string, value: boolean): Promise<void>
  export function isMaximizable(windowId: string): Promise<boolean>
  export function setFullscreenable(windowId: string, value: boolean): Promise<void>
  export function isFullscreenable(windowId: string): Promise<boolean>
  export function setClosable(windowId: string, value: boolean): Promise<void>
  export function isClosable(windowId: string): Promise<boolean>

  // Bounds
  export function setBounds(windowId: string, bounds: Partial<ExtWindowRectangle>, animate?: boolean): Promise<void>
  export function getBounds(windowId: string): Promise<ExtWindowRectangle>
  export function setContentBounds(windowId: string, bounds: ExtWindowRectangle, animate?: boolean): Promise<void>
  export function getContentBounds(windowId: string): Promise<ExtWindowRectangle>
  export function getNormalBounds(windowId: string): Promise<ExtWindowRectangle>
  
  // Size
  export function setSize(windowId: string, width: number, height: number, animate?: boolean): Promise<void>
  export function getSize(windowId: string): Promise<ExtWindowSize>
  export function setContentSize(windowId: string, width: number, height: number, animate?: boolean): Promise<void>
  export function getContentSize(windowId: string): Promise<ExtWindowSize>
  export function setMinimumSize(windowId: string, width: number | null, height: number | null, animate?: boolean): Promise<void>
  export function getMinimumSize(windowId: string): Promise<Partial<ExtWindowSize>>
  export function setMaximumSize(windowId: string, width: number | null, height: number | null, animate?: boolean): Promise<void>
  export function getMaximumSize(windowId: string): Promise<Partial<ExtWindowSize>>
  export function setAspectRatio(windowId: string, ratio: number | null): Promise<void>

  // Positioning
  export function setPosition(windowId: string, x: number, y: number): Promise<void>
  export function getPosition(windowId: string): Promise<ExtWindowPoint>
  export function center(windowId: string): Promise<void>

  // Z-index
  export function setAlwaysOnTop(windowId: string, value: boolean): Promise<void>
  export function isAlwaysOnTop(windowId: string): Promise<boolean>
  export function moveTop(windowId: string): Promise<void>
  
  // Hierarchy
  export function setParentWindow(windowId: string, parentWindowId: string): Promise<void>
  export function getParentWindow(windowId: string): Promise<ExtWindowId|null>
  export function getChildWindows(windowId: string): Promise<ExtWindowId[]>
  export function removeParentWindow(windowId: string): Promise<void>
  
  // Menu bar
  export function setAutoHideMenu(windowId: string, value: boolean): Promise<void>
  export function isMenuAutoHide(windowId: string): Promise<boolean>
  export function setMenuVisibility(windowId: string, value: boolean): Promise<void>
  export function isMenuVisible(windowId: string): Promise<boolean>
  export function setMenu(windowId: string, menu: ExtWindowMenuItem[]): Promise<void>
  export function removeMenu(windowId: string): Promise<void>
  
  // Context menu
  export function openContextMenu(windowId: string, menu: ExtWindowMenuItem[], x: number, y: number, positionIndex?: number): Promise<void>
  export function closeContextMenu(windowId: string): Promise<void>
  
  // Misc
  export function setIcon(windowId: string, icon: string): Promise<void>
  export function setFlashing(windowId: string, value: boolean): Promise<void>
  export function setSkipTaskbar(windowId: string, value: boolean): Promise<void>
  export function setAutoHideCursor(windowId: string, value: boolean): Promise<void>

  // Events
  
  /** Window created. */
  export const onCreated: ExtWindowsHandler<(event: ExtWindowEvent, details: ExtWindow) => void>
  /** Window removed. */
  export const onRemoved: ExtWindowsHandler<(event: ExtWindowEvent, details: ExtWindow) => void>
  /** Window closed. */
  export const onClosed: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window gained focus. */
  export const onFocused: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window lost focus. */
  export const onUnfocused: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window changed from invisible to visible. */
  export const onShown: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window changed from visible to invisible. */
  export const onHidden: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window entered fullscreen mode. */
  export const onEnteredFullscreen: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window exited fullscreen mode. */
  export const onExitedFullscreen: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window maximized. */
  export const onMaximized: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window unmaximized. */
  export const onUnmaximized: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window minimized. */
  export const onMinimized: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window restored from minimized state. */
  export const onRestored: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window resized. */
  export const onResized: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Window moved. */
  export const onMoved: ExtWindowsHandler<(event: ExtWindowEvent) => void>
  /** Menu item clicked. */
  export const onMenuClicked: ExtWindowsHandler<(event: ExtWindowEvent, details: ExtWindowEventMenuClicked) => void>
  /** Context menu item clicked. */
  export const onContextMenuClicked: ExtWindowsHandler<(event: ExtWindowEvent, details: ExtWindowEventMenuClicked) => void>
  /** Context menu closed. */
  export const onContextMenuClosed: ExtWindowsHandler<(event: ExtWindowEvent) => void>

}
