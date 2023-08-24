/** EXT windows module. */
declare namespace ext.windows {

  /** Window point structure. */
  export interface Point {
    x: number
    y: number
  }

  /** Window size structure. */
  export interface Size {
    width: number
    height: number
  }

  /** Window rectangle structure. */
  export interface Rectangle {
    x: number
    y: number
    width: number
    height: number
  }

  /** Window object. */
  export interface Window {
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
  export interface WindowProperties {
    width?: number
    height?: number
    position?: Point
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
    titleButtonsPosition?: Point
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
  export interface WindowUpdate {
    width?: number
    height?: number
    position?: Point
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
    titleButtonsPosition?: Point
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
  export interface MenuItem {
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
    submenu?: MenuItem[]
    tag?: string
  }

  /** Window ID. */
  export interface WindowId {
    /** Window ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Window event. */
  export interface WindowEvent {
    /** Window ID. */
    id: string
    /** Owning extension ID. */
    extension: string
  }

  /** Menu item clicked. */
  export interface EventMenuClicked {
    /** Menu tag. */
    tag?: string
  }

  /** Event handler. */
  interface EventHandler<Listener> {
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
  export function get(windowId: string): Promise<Window>
  export function query(filter?: Partial<Window>): Promise<Window[]>
  export function create(properties?: WindowProperties): Promise<Window>
  export function remove(windowIds: string | string[]): Promise<void> 
  export function update(windowIds: string | string[], properties?: WindowUpdate): Promise<void>

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
  export function getTitleButtonsPosition(windowId: string): Promise<Point>
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
  export function setBounds(windowId: string, bounds: Partial<Rectangle>, animate?: boolean): Promise<void>
  export function getBounds(windowId: string): Promise<Rectangle>
  export function setContentBounds(windowId: string, bounds: Rectangle, animate?: boolean): Promise<void>
  export function getContentBounds(windowId: string): Promise<Rectangle>
  export function getNormalBounds(windowId: string): Promise<Rectangle>
  
  // Size
  export function setSize(windowId: string, width: number, height: number, animate?: boolean): Promise<void>
  export function getSize(windowId: string): Promise<Size>
  export function setContentSize(windowId: string, width: number, height: number, animate?: boolean): Promise<void>
  export function getContentSize(windowId: string): Promise<Size>
  export function setMinimumSize(windowId: string, width: number | null, height: number | null, animate?: boolean): Promise<void>
  export function getMinimumSize(windowId: string): Promise<Partial<Size>>
  export function setMaximumSize(windowId: string, width: number | null, height: number | null, animate?: boolean): Promise<void>
  export function getMaximumSize(windowId: string): Promise<Partial<Size>>
  export function setAspectRatio(windowId: string, ratio: number | null): Promise<void>

  // Positioning
  export function setPosition(windowId: string, x: number, y: number): Promise<void>
  export function getPosition(windowId: string): Promise<Point>
  export function center(windowId: string): Promise<void>

  // Z-index
  export function setAlwaysOnTop(windowId: string, value: boolean): Promise<void>
  export function isAlwaysOnTop(windowId: string): Promise<boolean>
  export function moveTop(windowId: string): Promise<void>
  
  // Hierarchy
  export function setParentWindow(windowId: string, parentWindowId: string): Promise<void>
  export function getParentWindow(windowId: string): Promise<WindowId|null>
  export function getChildWindows(windowId: string): Promise<WindowId[]>
  export function removeParentWindow(windowId: string): Promise<void>
  
  // Menu bar
  export function setAutoHideMenu(windowId: string, value: boolean): Promise<void>
  export function isMenuAutoHide(windowId: string): Promise<boolean>
  export function setMenuVisibility(windowId: string, value: boolean): Promise<void>
  export function isMenuVisible(windowId: string): Promise<boolean>
  export function setMenu(windowId: string, menu: MenuItem[]): Promise<void>
  export function removeMenu(windowId: string): Promise<void>
  
  // Context menu
  export function openContextMenu(windowId: string, menu: MenuItem[], x: number, y: number, positionIndex?: number): Promise<void>
  export function closeContextMenu(windowId: string): Promise<void>
  
  // Misc
  export function setIcon(windowId: string, icon: string): Promise<void>
  export function setFlashing(windowId: string, value: boolean): Promise<void>
  export function setSkipTaskbar(windowId: string, value: boolean): Promise<void>
  export function setAutoHideCursor(windowId: string, value: boolean): Promise<void>

  // Events
  
  /** Window created. */
  export const onCreated: EventHandler<(event: WindowEvent, details: Window) => void>
  /** Window removed. */
  export const onRemoved: EventHandler<(event: WindowEvent, details: Window) => void>
  /** Window closed. */
  export const onClosed: EventHandler<(event: WindowEvent) => void>
  /** Window gained focus. */
  export const onFocused: EventHandler<(event: WindowEvent) => void>
  /** Window lost focus. */
  export const onUnfocused: EventHandler<(event: WindowEvent) => void>
  /** Window changed from invisible to visible. */
  export const onShown: EventHandler<(event: WindowEvent) => void>
  /** Window changed from visible to invisible. */
  export const onHidden: EventHandler<(event: WindowEvent) => void>
  /** Window entered fullscreen mode. */
  export const onEnteredFullscreen: EventHandler<(event: WindowEvent) => void>
  /** Window exited fullscreen mode. */
  export const onExitedFullscreen: EventHandler<(event: WindowEvent) => void>
  /** Window maximized. */
  export const onMaximized: EventHandler<(event: WindowEvent) => void>
  /** Window unmaximized. */
  export const onUnmaximized: EventHandler<(event: WindowEvent) => void>
  /** Window minimized. */
  export const onMinimized: EventHandler<(event: WindowEvent) => void>
  /** Window restored from minimized state. */
  export const onRestored: EventHandler<(event: WindowEvent) => void>
  /** Window resized. */
  export const onResized: EventHandler<(event: WindowEvent) => void>
  /** Window moved. */
  export const onMoved: EventHandler<(event: WindowEvent) => void>
  /** Menu item clicked. */
  export const onMenuClicked: EventHandler<(event: WindowEvent, details: EventMenuClicked) => void>
  /** Context menu item clicked. */
  export const onContextMenuClicked: EventHandler<(event: WindowEvent, details: EventMenuClicked) => void>
  /** Context menu closed. */
  export const onContextMenuClosed: EventHandler<(event: WindowEvent) => void>

}
