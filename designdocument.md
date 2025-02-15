## 项目概述

### 项目目的

灵感来自于我工作的店 [[TravelSmarts Luggage & Accessories]]，因为我的 CS 背景，所以 manager 有叫我帮忙优化 Excel 排班表，但我觉得或许一个 Web 项目更易于操作。
这是一个基于 Web 的 SKED（排班）应用，以替代现有的 Excel 方案，以简化 manager 的排班流程，提高可视化效果，并自动计算工时与工资。该项目将作为一个本地运行的 Web 应用，供管理人员使用。

## 功能需求

- 人员管理
	- 可以 CRUD 管理人员
- **排班管理**
    - 允许管理者为不同员工分配班次
    - 用 calendar可视化显示员工班次安排
- **工时与工资计算**
    - 自动计算每位员工的每周工时
    - 计算对应工资，提供导出功能
- **邮件模板生成**
    - 根据班次信息生成邮件通知
    - 允许管理者复制包含时间的邮件模板
- **数据导入/导出**
    - 允许导出 Excel，csv 文件
    - 支持以导出文件的模板导入数据

## 技术要求

- **前端**：React（React Hooks, React Router），Typescript
	- 日历组件：FullCalendar
	- 表格组件：react-table
	- 导出/导入 Excel, CSV：
- **状态管理**：Context API
- **后端**：暂时不需要后端
- **UI 框架**：Tailwind CSS
- **数据存储**：本地存储

## 界面设计

- 主页
	- Calendar 大表
	- 上方有不同颜色的员工按钮，每个员工左边有一个按钮，点击即可生成当周的邮件模板
	- 员工班次管理（新增/修改/删除）
	- 可视化拖拽调整班次
	- 下方有自动计算出的每周每个员工工时的表，和可以调整起止日的计算范围表（默认两周，因为加拿大每两周发一次工资）
- 员工页
	- 姓名
	- role
	- unavailable day
	- 颜色
- 

### 员工表（Employees）

```tsx
interface Employee {
  id: string;
  name: string;
  role: string;
  color: string;
  unavailableDays: number[];
  unavailableDates: string[];
  maxHoursPerWeek?: number;
  isActive: boolean;
}
```
### 班次表（Shifts）

```tsx
interface Shift {
  id: string;
  employeeId: string;
  date: Date;
  startTime: string;
  endTime: string;
  haveBreak: boolean;
  totalHours: number;
  actualWorkHours: number;
}
```
