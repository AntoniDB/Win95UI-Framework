# win95ui

A Windows 95-inspired UI component library for React. https://win95ui.vercel.app/

![npm](https://img.shields.io/npm/v/win95ui)
![license](https://img.shields.io/npm/l/win95ui)

## Preview

![Button](https://github.com/AntoniDB/Win95UI-Framework/blob/master/Assets/button_componentui.png)
![MessageBox](https://github.com/AntoniDB/Win95UI-Framework/blob/master/Assets/messagebox_code_componentui.png)
![ProgressBar](https://github.com/AntoniDB/Win95UI-Framework/blob/master/Assets/progressbar_componentui.png)
![Select](https://github.com/AntoniDB/Win95UI-Framework/blob/master/Assets/select_componentui.png)
![Tabs](https://github.com/AntoniDB/Win95UI-Framework/blob/master/Assets/tabs_componentui.png)
![TextField](https://github.com/AntoniDB/Win95UI-Framework/blob/master/Assets/textfield_componentui.png)

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

### Large datasets: VirtualDataGrid

`VirtualDataGrid` takes the same columns as `DataGrid`, but only renders the rows that are visible, so it stays fast with hundreds of thousands of rows. It needs a fixed `height`; every row has the same `rowHeight` (default 22px) and taller cell content is clipped.

```jsx
import { useState } from 'react';
import { VirtualDataGrid } from 'win95ui';

const rows = Array.from({ length: 100000 }, (_, i) => ({
  id: String(i),
  name: `File ${i}.txt`,
  size: (i * 7919) % 100000,
}));

const columns = [
  { key: 'name', header: 'Name', accessor: (row) => row.name },
  { key: 'size', header: 'Size (KB)', accessor: (row) => row.size, width: 120 },
];

function FileList() {
  const [selected, setSelected] = useState();
  return (
    <VirtualDataGrid
      columns={columns}
      rows={rows}
      rowKey={(row) => row.id}
      height={400}
      selectedKey={selected}
      onRowClick={(row) => setSelected(row.id)}
    />
  );
}
```

Optional props: `rowHeight` (default `22`) and `overscan`, the extra rows rendered above and below the visible area (default `8`). Click a column header, or press Enter/Space on it, to sort.

## Components (25)

| Category | Components |
|----------|-----------|
| **Inputs** | Button, TextField, Checkbox, Radio, Select, Slider, Switch |
| **Layout** | Window, Tabs, GroupBox, StatusBar, Taskbar |
| **Navigation** | Menu, MenuBar, StartMenu, TreeView |
| **Data** | ListView, DataGrid, VirtualDataGrid |
| **Feedback** | MessageBox, ProgressBar, Tooltip, Badge, HourglassCursor |
| **Display** | Icon |

## License

MIT © antonidb182
