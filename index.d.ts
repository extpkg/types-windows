/** EXT windows module. */
declare namespace ext.windows {

  /** Window point structure. */
  export interface Point {
    /** X coordinate. */
    x: number
    /** Y coordinate. */
    y: number
  }

  /** Window size structure. */
  export interface Size {
    /** Width property. */
    width: number
    /** Height property. */
    height: number
  }

  /** Window rectangle structure. */
  export interface Rectangle {
    /** X coordinate. */
    x: number
    /** Y coordinate. */
    y: number
    /** Width property. */
    width: number
    /** Height property. */
    height: number
  }

  /** Window object. */
  export interface Window {
    /** Window ID. */
    id: string 
    /** Owning extension ID. */
    extension: string
    /** Minimum width. */
    minWidth?: number
    /** Minimum height. */
    minHeight?: number
    /** Maximum width. */
    maxWidth?: number
    /** Maximum height. */
    maxHeight?: number
    /** True if resizable. */
    resizable: boolean
    /** True if movable. */
    movable: boolean
    /** True if minimizable. */
    minimizable: boolean
    /** True if maximizable. */
    maximizable: boolean
    /** True if closable. */
    closable: boolean
    /** True if focusable. */
    focusable: boolean
    /** Display the window in front of all other windows. */
    alwaysOnTop: boolean
    /** True if fullscreenable. */
    fullscreenable: boolean
    /** Window title. */
    title: string
    /** True if visible. */
    visible: boolean
    /** Parent window ID. */
    parent?: string
    /** True if window is a modal. */
    modal: boolean
    /** True to automatically hide the menu. */
    autoHideMenu: boolean
    /** Background color. */
    backgroundColor: string
    /** True to display shadow. */
    shadow: boolean
    /** Window opacity. */
    opacity: number
    /** True if vibrancy is enabled. */
    vibrancy: boolean
  }

  /** Window creation properties. */
  export interface WindowProperties {
    /** Width in pixels. */
    width?: number
    /** Height in pixels. */
    height?: number
    /** Position in pixels. */
    position?: Point
    /** True to use content size when setting width and height. */
    useContentSize?: boolean
    /** True to center the window. */
    center?: boolean
    /** Minimum width in pixels. */
    minWidth?: number
    /** Minimum height in pixels. */
    minHeight?: number
    /** Maximum width in pixels. */
    maxWidth?: number
    /** Maximum height in pixels. */
    maxHeight?: number
    /** True if resizable. */
    resizable?: boolean
    /** True if movable. */
    movable?: boolean
    /** True if minimizable. */
    minimizable?: boolean
    /** True if maximizable. */
    maximizable?: boolean
    /** True if closable. */
    closable?: boolean
    /** True if focusable. */
    focusable?: boolean
    /** True if displayed on top of all other windows. */
    alwaysOnTop?: boolean
    /** Fullscreen mode. */
    fullscreen?: boolean
    /** True if fullscreenable. */
    fullscreenable?: boolean
    /** True if hidden from taskbar. */
    skipTaskbar?: boolean
    /** Window title. */
    title?: string
    /** Icon url or path. */
    icon?: string
    /** True if visible. */
    visible?: boolean
    /** Use system frame. */
    frame?: boolean
    /** Parent window ID. */
    parent?: string
    /** True if window is modal of a parent. */
    modal?: boolean
    /** Automatically hide cursor. */
    autoHideCursor?: boolean
    /** Automatically hide menu. */
    autoHideMenu?: boolean
    /** Background color. */
    backgroundColor?: string
    /** True to display window shadow. */
    shadow?: boolean
    /** Window opacity if transparent. */
    opacity?: number
    /** True if transparent. */
    transparent?: boolean
    /** Title bar configuration for frameless windows. */
    titleBarStyle?: 'inset' | 'hidden'
    /** Title bar buttons position. */
    titleButtonsPosition?: Point
    /** True if window has rounded corners. */
    roundedCorners?: boolean
    /** True if focused. */
    focused?: boolean
    /** True if maximized. */
    maximized?: boolean
    /** True if minimized. */
    minimized?: boolean
    /** True if enabled. */
    enabled?: boolean
    /** Aspect ratio to force when resize. */
    aspectRatio?: number
    /** True if the menu is visible. */
    menuVisible?: boolean
    /** True if window is flashing. */
    flashing?: boolean
    /** True if vibrancy is enabled. */
    vibrancy?: boolean
    /** Window background css. */
    backgroundCSS?: string
  }

  /** Window update properties. */
  export interface WindowUpdate {
    /** New width in pixels. */
    width?: number
    /** New height in pixels. */
    height?: number
    /** New position. */
    position?: Point
    /** Use content size when adjusting width and height. */
    useContentSize?: boolean
    /** Center the window. */
    center?: boolean
    /** New minimum width. */
    minWidth?: number
    /** New minimum height. */
    minHeight?: number
    /** New maximum width. */
    maxWidth?: number
    /** New maximum height. */
    maxHeight?: number
    /** New resizable state. */
    resizable?: boolean
    /** New movable state. */
    movable?: boolean
    /** New minimizable state. */
    minimizable?: boolean
    /** New maximizable state. */
    maximizable?: boolean
    /** New closable state. */
    closable?: boolean
    /** New focusable state. */
    focusable?: boolean
    /** New alwaysOnTop state. */
    alwaysOnTop?: boolean
    /** New fullscreen state. */
    fullscreen?: boolean
    /** New fullscreenable state. */
    fullscreenable?: boolean
    /** New skipTaskbar state. */
    skipTaskbar?: boolean
    /** New title. */
    title?: string
    /** New icon. */
    icon?: string
    /** New visibility state. */
    visible?: boolean
    /** New parent window ID. */
    parent?: string | null
    /** New autoHideCursor state. */
    autoHideCursor?: boolean
    /** New autoHideMenuBar state. */
    autoHideMenuBar?: boolean
    /** New background color. */
    backgroundColor?: string
    /** New shadow state. */
    shadow?: boolean
    /** New opacity. */
    opacity?: number
    /** New title bar buttons position. */
    titleButtonsPosition?: Point
    /** New focused state. */
    focused?: boolean
    /** New maximized state. */
    maximized?: boolean
    /** New minimized state. */
    minimized?: boolean
    /** New enabled state. */
    enabled?: boolean
    /** New aspect ratio. */
    aspectRatio?: number | null
    /** New menuBarVisible state. */
    menuBarVisible?: boolean
    /** New flashing state. */
    flashing?: boolean
    /** New vibrancy state. */
    vibrancy?: boolean
  }

  /** Menu item properties. */
  export interface MenuItem {
    /** Item role. */
    role?: (
      'undo' | 'about' | 'redo' | 'cut' | 'copy' | 'paste' |'pasteAndMatchStyle' |
      'selectAll' | 'delete' | 'minimize' | 'close' | 'quit' | 'reload' | 'forceReload' |
      'toggleDevTools' | 'togglefullscreen' | 'resetZoom' | 'zoomIn' | 'zoomOut' |
      'toggleSpellChecker' | 'fileMenu' | 'editMenu' | 'viewMenu' | 'windowMenu'
    )
    /** Item type. */
    type?: 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio'
    /** Item label. */
    label?: string
    /** Item sublabel. */
    sublabel?: string
    /** Item tooltip. */
    tooltip?: string
    /** Item shortcut. */
    accelerator?: string
    /** Item icon url or path. */
    icon?: string
    /** True if enabled. */
    enabled?: boolean
    /** True if shortcut should work when item is hidden. */
    acceleratorWorksWhenHidden?: boolean
    /** True if visible. */
    visible?: boolean
    /** True if checked. */
    checked?: boolean
    /** True to register the shortcut. */
    registerAccelerator?: boolean
    /** Submenu items. */
    submenu?: MenuItem[]
    /** Item tag for events. */
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

  /**
   * Gets the window with the given ID.
   * @param windowId The ID of the window to get.
   * @returns The promise resolves with the window object if it exists.
   */
  export function get(windowId: string): Promise<Window>

  /**
   * Queries windows based on the provided filter.
   * @param filter The filter criteria to match windows.
   * @returns The promise resolves with an array of windows that match the filter.
   */
  export function query(filter?: Partial<Window>): Promise<Window[]>

  /**
   * Creates a new window with the given properties.
   * @param properties The properties for the new window.
   * @returns The promise resolves with the created window object.
   */
  export function create(properties?: WindowProperties): Promise<Window>

  /**
   * Removes the specified windows.
   * @param windowIds The IDs of the windows to remove.
   * @returns The promise resolves when the window is removed.
   */
  export function remove(windowIds: string | string[]): Promise<void>
  
  /**
   * Updates the specified windows with the given properties.
   * @param windowIds The IDs of the windows to update.
   * @param properties The properties to update the windows with.
   * @returns The promise resolves when the windows are updated.
   */
  export function update(windowIds: string | string[], properties?: WindowUpdate): Promise<void>

  // State

  /**
   * Focuses the specified window.
   * @param windowId The ID of the window to focus.
   * @returns The promise resolves when the window is focused.
   */
  export function focus(windowId: string): Promise<void>

  /**
   * Unfocuses the specified window.
   * @param windowId The ID of the window to unfocus.
   * @returns The promise resolves when the window is updated.
   */
  export function unfocus(windowId: string): Promise<void>

  /**
   * Checks if the specified window is focused.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is focused.
   */
  export function isFocused(windowId: string): Promise<boolean>

  /**
   * Shows the specified window.
   * @param windowId The ID of the window to show.
   * @param focus Optional parameter to focus the window when shown.
   * @returns The promise resolves when the window is updated.
   */
  export function show(windowId: string, focus?: boolean): Promise<void>

  /**
   * Hides the specified window.
   * @param windowId The ID of the window to hide.
   * @returns The promise resolves when the window is updated.
   */
  export function hide(windowId: string): Promise<void>

  /**
   * Checks if the specified window is visible.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is visible.
   */
  export function isVisible(windowId: string): Promise<boolean>

  /**
   * Maximizes the specified window.
   * @param windowId The ID of the window to maximize.
   * @returns The promise resolves when the window is updated.
   */
  export function maximize(windowId: string): Promise<void>

  /**
   * Unmaximizes the specified window.
   * @param windowId The ID of the window to unmaximize.
   * @returns The promise resolves when the window is updated.
   */
  export function unmaximize(windowId: string): Promise<void>

  /**
   * Checks if the specified window is maximized.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is maximized.
   */
  export function isMaximized(windowId: string): Promise<boolean>

  /**
   * Minimizes the specified window.
   * @param windowId The ID of the window to minimize.
   * @returns The promise resolves when the window is updated.
   */
  export function minimize(windowId: string): Promise<void>

  /**
   * Restores the specified window if minimized.
   * @param windowId The ID of the window to restore.
   * @returns The promise resolves when the window is updated.
   */
  export function restore(windowId: string): Promise<void>

  /**
   * Checks if the specified window is minimized.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is minimized.
   */
  export function isMinimized(windowId: string): Promise<boolean>

  /**
   * Sets the fullscreen mode for the specified window.
   * @param windowId The ID of the window to set.
   * @param enabled Whether to enable or disable fullscreen mode.
   * @returns The promise resolves when the window is updated.
   */
  export function setFullscreen(windowId: string, enabled: boolean): Promise<void>

  /**
   * Checks if the specified window is in fullscreen mode.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is in fullscreen mode.
   */
  export function isFullscreen(windowId: string): Promise<boolean>
  
  // Appearance

  /**
   * Sets the vibrancy for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value True if vibrancy is enabled.
   * @returns The promise resolves when the window is updated.
   */
  export function setVibrancy(windowId: string, value: boolean): Promise<void>

  /**
   * Gets the vibrancy for the specified window.
   * @param windowId The ID of the window to retrieve the vibrancy from.
   * @returns The promise resolves with a boolean indicating if the window has vibrancy.
   */
  export function hasVibrancy(windowId: string): Promise<boolean>

  /**
   * Sets the background color for the specified window.
   * @param windowId The ID of the window to modify.
   * @param color The desired background color.
   * @returns The promise resolves when the window is updated.
   */
  export function setBackgroundColor(windowId: string, color: string): Promise<void>

  /**
   * Retrieves the background color of the specified window.
   * @param windowId The ID of the window to retrieve the color from.
   * @returns The promise resolves with the background color of the window.
   */
  export function getBackgroundColor(windowId: string): Promise<string>

  /**
   * Adjusts the opacity of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value The desired opacity level.
   * @returns The promise resolves when the window is updated.
   */
  export function setOpacity(windowId: string, value: number): Promise<void>

  /**
   * Obtains the opacity level of the specified window.
   * @param windowId The ID of the window to retrieve the opacity from.
   * @returns The promise resolves with the opacity level of the window.
   */
  export function getOpacity(windowId: string): Promise<number>

  /**
   * Enables or disables the shadow for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to enable or disable the shadow.
   * @returns The promise resolves when the window is updated.
   */
  export function setShadow(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window has a shadow.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window has a shadow.
   */
  export function hasShadow(windowId: string): Promise<boolean>

  /**
   * Assigns a title to the specified window.
   * @param windowId The ID of the window to modify.
   * @param title The desired title.
   * @returns The promise resolves when the window is updated.
   */
  export function setTitle(windowId: string, title: string): Promise<void>

  /**
   * Fetches the title of the specified window.
   * @param windowId The ID of the window to retrieve the title from.
   * @returns The promise resolves with the title of the window.
   */
  export function getTitle(windowId: string): Promise<string>

  /**
   * Sets title buttons position.
   * @param windowId The ID of the window to modify.
   * @param x X-position of the title buttons.
   * @param y Y-position of the title buttons.
   * @returns The promise resolves when the window is updated.
   */
  export function setTitleButtonsPosition(windowId: string, x: number, y: number): Promise<void>

  /**
   * Gets title buttons position.
   * @param windowId The ID of the window to get.
   * @returns The promise resolves with the position of title buttons.
   */
  export function getTitleButtonsPosition(windowId: string): Promise<Point>

  /**
   * Sets the enabled state of the specified window.
   * @param windowId The ID of the window to modify.
   * @param enabled Whether to enable or disable the window.
   * @returns The promise resolves when the window is updated.
   */
  export function setEnabled(windowId: string, enabled: boolean): Promise<void>

  /**
   * Checks if the specified window is enabled.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is enabled.
   */
  export function isEnabled(windowId: string): Promise<boolean>

  // Controls

  /**
   * Sets the resizable property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to make the window resizable or not.
   * @returns The promise resolves when the window is updated.
   */
  export function setResizable(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is resizable.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is resizable.
   */
  export function isResizable(windowId: string): Promise<boolean>

  /**
   * Sets the movable property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to make the window movable or not.
   * @returns The promise resolves when the window is updated.
   */
  export function setMovable(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is movable.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is movable.
   */
  export function isMovable(windowId: string): Promise<boolean>

  /**
   * Sets the minimizable property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to make the window minimizable or not.
   * @returns The promise resolves when the window is updated.
   */
  export function setMinimizable(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is minimizable.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is minimizable.
   */
  export function isMinimizable(windowId: string): Promise<boolean>

  /**
   * Sets the maximizable property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to make the window maximizable or not.
   * @returns The promise resolves when the window is updated.
   */
  export function setMaximizable(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is maximizable.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is maximizable.
   */
  export function isMaximizable(windowId: string): Promise<boolean>

  /**
   * Sets the fullscreenable property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to make the window fullscreenable or not.
   * @returns The promise resolves when the window is updated.
   */
  export function setFullscreenable(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is fullscreenable.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is fullscreenable.
   */
  export function isFullscreenable(windowId: string): Promise<boolean>

  /**
   * Sets the closable property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether to make the window closable or not.
   * @returns The promise resolves when the window is updated.
   */
  export function setClosable(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is closable.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is closable.
   */
  export function isClosable(windowId: string): Promise<boolean>

  // Bounds

  /**
   * Sets the bounds of the specified window.
   * @param windowId The ID of the window to modify.
   * @param bounds The new bounds for the window.
   * @param animate Optional parameter to animate the transition.
   * @returns The promise resolves when the window is updated.
   */
  export function setBounds(windowId: string, bounds: Partial<Rectangle>, animate?: boolean): Promise<void>

  /**
   * Gets the bounds of the specified window.
   * @param windowId The ID of the window to retrieve bounds for.
   * @returns The promise resolves with the bounds of the window.
   */
  export function getBounds(windowId: string): Promise<Rectangle>

  /**
   * Sets the content bounds of the specified window.
   * @param windowId The ID of the window to modify.
   * @param bounds The new content bounds for the window.
   * @param animate Optional parameter to animate the transition.
   * @returns The promise resolves when the window is updated.
   */
  export function setContentBounds(windowId: string, bounds: Rectangle, animate?: boolean): Promise<void>

  /**
   * Gets the content bounds of the specified window.
   * @param windowId The ID of the window to retrieve content bounds for.
   * @returns The promise resolves with the content bounds of the window.
   */
  export function getContentBounds(windowId: string): Promise<Rectangle>

  /**
   * Gets the normal bounds of the specified window.
   * @param windowId The ID of the window to retrieve normal bounds for.
   * @returns The promise resolves with the normal bounds of the window.
   */
  export function getNormalBounds(windowId: string): Promise<Rectangle>
  
  // Size

  /**
   * Sets the size of the specified window.
   * @param windowId The ID of the window to modify.
   * @param width The new width for the window.
   * @param height The new height for the window.
   * @param animate Optional parameter to animate the transition.
   * @returns The promise resolves when the window is updated.
   */
  export function setSize(windowId: string, width: number, height: number, animate?: boolean): Promise<void>

  /**
   * Gets the size of the specified window.
   * @param windowId The ID of the window to retrieve size for.
   * @returns The promise resolves with the size of the window.
   */
  export function getSize(windowId: string): Promise<Size>

  /**
   * Sets the content size of the specified window.
   * @param windowId The ID of the window to modify.
   * @param width The new content width for the window.
   * @param height The new content height for the window.
   * @param animate Optional parameter to animate the transition.
   * @returns The promise resolves when the window is updated.
   */
  export function setContentSize(windowId: string, width: number, height: number, animate?: boolean): Promise<void>

  /**
   * Gets the content size of the specified window.
   * @param windowId The ID of the window to retrieve content size for.
   * @returns The promise resolves with the content size of the window.
   */
  export function getContentSize(windowId: string): Promise<Size>

  /**
   * Sets the minimum size of the specified window.
   * @param windowId The ID of the window to modify.
   * @param width The new minimum width for the window.
   * @param height The new minimum height for the window.
   * @param animate Optional parameter to animate the transition.
   * @returns The promise resolves when the window is updated.
   */
  export function setMinimumSize(windowId: string, width: number | null, height: number | null, animate?: boolean): Promise<void>

  /**
   * Gets the minimum size of the specified window.
   * @param windowId The ID of the window to retrieve minimum size for.
   * @returns The promise resolves with the minimum size of the window.
   */
  export function getMinimumSize(windowId: string): Promise<Partial<Size>>

  /**
   * Sets the maximum size of the specified window.
   * @param windowId The ID of the window to modify.
   * @param width The new maximum width for the window.
   * @param height The new maximum height for the window.
   * @param animate Optional parameter to animate the transition.
   * @returns The promise resolves when the window is updated.
   */
  export function setMaximumSize(windowId: string, width: number | null, height: number | null, animate?: boolean): Promise<void>

  /**
   * Gets the maximum size of the specified window.
   * @param windowId The ID of the window to retrieve maximum size for.
   * @returns The promise resolves with the maximum size of the window.
   */
  export function getMaximumSize(windowId: string): Promise<Partial<Size>>

  /**
   * Sets the aspect ratio of the specified window.
   * @param windowId The ID of the window to modify.
   * @param ratio The new aspect ratio for the window.
   * @returns The promise resolves when the window is modified.
   */
  export function setAspectRatio(windowId: string, ratio: number | null): Promise<void>

  // Positioning

  /**
   * Sets the position of the specified window.
   * @param windowId The ID of the window to modify.
   * @param x The new x-coordinate for the window.
   * @param y The new y-coordinate for the window.
   * @returns The promise resolves when the window is updated.
   */
  export function setPosition(windowId: string, x: number, y: number): Promise<void>

  /**
   * Gets the position of the specified window.
   * @param windowId The ID of the window to retrieve position for.
   * @returns The promise resolves with the position of the window.
   */
  export function getPosition(windowId: string): Promise<Point>

  /**
   * Centers the specified window.
   * @param windowId The ID of the window to center.
   * @returns The promise resolves when the window is updated.
   */
  export function center(windowId: string): Promise<void>

  // Z-index

  /**
   * Sets the "always on top" property of the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether the window should always be on top.
   * @returns The promise resolves when the window is updated.
   */
  export function setAlwaysOnTop(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the specified window is always on top.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the window is always on top.
   */
  export function isAlwaysOnTop(windowId: string): Promise<boolean>

  /**
   * Moves the specified window to the top.
   * @param windowId The ID of the window to move to the top.
   * @returns The promise resolves when the window is updated.
   */
  export function moveTop(windowId: string): Promise<void>
  
  // Hierarchy

  /**
   * Sets the parent window for the specified window.
   * @param windowId The ID of the window to modify.
   * @param parentWindowId The ID of the parent window.
   * @returns The promise resolves when the window is updated.
   */
  export function setParentWindow(windowId: string, parentWindowId: string): Promise<void>

  /**
   * Gets the parent window of the specified window.
   * @param windowId The ID of the window to retrieve the parent for.
   * @returns The promise resolves with the parent window object if it exists, or null if it does not.
   */
  export function getParentWindow(windowId: string): Promise<WindowId|null>

  /**
   * Gets the child windows of the specified window.
   * @param windowId The ID of the window to retrieve children for.
   * @returns The promise resolves with an array of child window objects.
   */
  export function getChildWindows(windowId: string): Promise<WindowId[]>

  /**
   * Removes the parent window if set.
   * @param windowId The ID of the window to remove the parent from.
   * @returns The promise resolves when the window is updated.
   */
  export function removeParentWindow(windowId: string): Promise<void>
  
  // Menu bar

  /**
   * Sets the auto-hide property of the menu for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether the menu should auto-hide.
   * @returns The promise resolves when the window is updated.
   */
  export function setAutoHideMenu(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the menu of the specified window is set to auto-hide.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the menu is set to auto-hide.
   */
  export function isMenuAutoHide(windowId: string): Promise<boolean>

  /**
   * Sets the visibility of the menu for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether the menu should be visible.
   * @returns The promise resolves when the window is updated.
   */
  export function setMenuVisibility(windowId: string, value: boolean): Promise<void>

  /**
   * Checks if the menu of the specified window is visible.
   * @param windowId The ID of the window to check.
   * @returns The promise resolves with a boolean indicating if the menu is visible.
   */
  export function isMenuVisible(windowId: string): Promise<boolean>

  /**
   * Sets the menu for the specified window.
   * @param windowId The ID of the window to modify.
   * @param menu The array of menu items.
   * @returns The promise resolves when the window is updated.
   */
  export function setMenu(windowId: string, menu: MenuItem[]): Promise<void>

  /**
   * Removes the menu from the specified window.
   * @param windowId The ID of the window to remove the menu from.
   * @returns The promise resolves when the window is updated.
   */
  export function removeMenu(windowId: string): Promise<void>
  
  // Context menu

  /**
   * Opens the context menu for the specified window.
   * @param windowId The ID of the window to open the context menu for.
   * @param menu The array of context menu items.
   * @param x The x-coordinate for the context menu.
   * @param y The y-coordinate for the context menu.
   * @param positionIndex The index position for the context menu.
   * @returns The promise resolves when the contex menu is opened.
   */
  export function openContextMenu(windowId: string, menu: MenuItem[], x: number, y: number, positionIndex?: number): Promise<void>

  /**
   * Closes the context menu for the specified window.
   * @param windowId The ID of the window to close the context menu for.
   * @returns The promise resolves when the context menu is closed.
   */
  export function closeContextMenu(windowId: string): Promise<void>
  
  // Misc

  /**
   * Sets the icon for the specified window.
   * @param windowId The ID of the window to modify.
   * @param icon The path to the icon.
   * @returns The promise resolves when the window is updated.
   */
  export function setIcon(windowId: string, icon: string): Promise<void>

  /**
   * Sets the flashing property for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether the window should flash.
   * @returns The promise resolves when the window is updated.
   */
  export function setFlashing(windowId: string, value: boolean): Promise<void>

  /**
   * Sets the "skip taskbar" property for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether the window should skip the taskbar.
   * @returns The promise resolves when the window is updated.
   */
  export function setSkipTaskbar(windowId: string, value: boolean): Promise<void>

  /**
   * Sets the auto-hide cursor property for the specified window.
   * @param windowId The ID of the window to modify.
   * @param value Whether the cursor should auto-hide.
   * @returns The promise resolves when the window is updated.
   */
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
