# win95ui

A Windows 95-inspired UI component library for React.

![npm](https://img.shields.io/npm/v/win95ui)
![license](https://img.shields.io/npm/l/win95ui)

## Preview

![Button](./assets/button_componentui.png)
![MessageBox](./assets/messagebox_code_componentui.png)
![ProgressBar](./assets/progressbar_componentui.png)
![Select](./assets/select_componentui.png)
![Tabs](./assets/tabs_componentui.png)
![TextField](./assets/textfield_componentui.png)

## Installation

```bash
npm install win95ui
```

## Usage

```jsx
import { Button, Window, MessageBox } from 'win95ui';

function App() {
  return (
    <Window title="My App">
      <Button>OK</Button>
    </Window>
  );
}
```

## Components (23)

| Category | Components |
|----------|-----------|
| **Inputs** | Button, TextField, Checkbox, Radio, Select, Slider, Switch |
| **Layout** | Window, Tabs, GroupBox, StatusBar, Taskbar |
| **Navigation** | Menu, MenuBar, StartMenu, TreeView |
| **Data** | ListView, DataGrid |
| **Feedback** | MessageBox, ProgressBar, Tooltip, Badge, HourglassCursor |
| **Display** | Icon |

## License

MIT © antonidb182