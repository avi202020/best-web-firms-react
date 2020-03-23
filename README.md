Components
----------

**src/controls/general-purpose/ctrl-accordion/accordion-item.js**

### 1. CtrlAccordionItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|node|yes||
classes|object|yes||
expandedValues|array|yes||
id|string|yes||
onCollapse|func|yes||
onExpand|func|yes||
title|string|yes||
value|any|yes||
-----
**src/controls/general-purpose/ctrl-accordion/index.js**

### 1. CtrlAccordion




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|null|
classes|object|yes||
expandedValues|array|yes||
id|string|yes||
itemDesProp|string|no|&lt;See the source code&gt;|
itemValProp|string|no|&lt;See the source code&gt;|
items|array|yes||
onCollapse|func|yes||
onExpand|func|yes||
renderContent|func|yes||
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-autocomplete-field/icon.js**

### 1. CtrlIcon




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
disabled|bool|no|false|
id|string|yes||
isSearching|bool|no|false|
onUnselectSuggestion|func|yes||
selectedSuggestion|any|no|null|
setFocusOnInput|func|yes||
-----
**src/controls/general-purpose/ctrl-autocomplete-field/index.js**

### 1. CtrlAutocompleteField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
autoFocus|bool|no|false|
className|string|no|null|
classes|object|yes||
disabled|bool|no|false|
id|string|yes||
isSearching|bool|no|false|
itemDesProp|string|no|&lt;See the source code&gt;|
itemValProp|string|no|&lt;See the source code&gt;|
label|string|no|null|
minQueryLength|number|no|1|
name|string|no|null|
onBlur|func|no|null|
onChange|func|yes||
onFocus|func|no|null|
onSearch|func|yes||
placeholder|string|no|&lt;See the source code&gt;|
query|string|yes||
renderSuggestion|func|no|null|
required|bool|no|false|
showErrors|bool|no|true|
suggestions|array|no|&lt;See the source code&gt;|
value|any|no|null|
variant|enum|no|DEFAULT_FIELD_VARIANT|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-autocomplete-field/suggestions.js**

### 1. CtrlSuggestions




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
highlightedIndex|number|yes||
id|string|yes||
onSelectSuggestion|func|yes||
renderSuggestion|func|yes||
suggestions|array|no|&lt;See the source code&gt;|
visible|bool|yes||
-----
**src/controls/general-purpose/ctrl-avatar-field/index.js**

### 1. CtrlAvatarField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|null|
classes|object|yes||
disabled|bool|no|false|
id|string|yes||
lang|shape|yes||
maxSizeMb|number|no|null|
name|string|no|null|
onBlur|func|no|null|
onChange|func|no|null|
onFocus|func|no|null|
readMode|enum|no|&lt;See the source code&gt;|
required|bool|no|false|
showErrors|bool|no|true|
tooltip|string|no|null|
value|string|no|null|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-check-field/index.js**

### 1. CtrlCheckField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
autoFocus|bool|no|false|
className|string|no|null|
classes|object|yes||
color|enum|no|&lt;See the source code&gt;|
disabled|bool|no|false|
id|string|yes||
label|string|yes||
name|string|no|null|
onBlur|func|no|null|
onChange|func|yes||
onFocus|func|no|null|
required|bool|no|false|
showErrors|bool|no|true|
value|bool|yes||
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-date-field/index.js**

### 1. CtrlDateField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
autoFocus|bool|no|false|
className|string|no|null|
classes|object|yes||
disabled|bool|no|false|
icon|string|no|null|
id|string|yes||
label|string|no|null|
maxValue|instanceOf|no|null|
minValue|instanceOf|no|null|
name|string|no|null|
onBlur|func|no|null|
onChange|func|no|null|
onFocus|func|no|null|
required|bool|no|false|
showErrors|bool|no|true|
value|instanceOf|no|null|
variant|enum|no|DEFAULT_FIELD_VARIANT|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-header/index.js**

### 1. CtrlHeader




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|null|
classes|object|yes||
id|string|yes||
leftContent|union|no|null|
rightContent|union|no|null|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-icon-button/index.js**

### 1. CtrlIconButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
badgeContent|number|no|null|
className|string|no|null|
classes|object|yes||
contextMenu|shape|no|null|
icon|string|yes||
id|string|yes||
permission|string|no|null|
tooltip|string|yes||
userPermissions|arrayOf|yes||
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-multiselect-field/index.js**

### 1. CtrlMultiselectField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
allowSearch|bool|no|false|
allowSelectAll|bool|no|false|
className|string|no|null|
classes|object|yes||
id|string|yes||
itemDesProp|string|no|&lt;See the source code&gt;|
itemValProp|string|no|&lt;See the source code&gt;|
items|array|yes||
listHeight|number|no|190|
name|string|no|null|
onChange|func|yes||
onChangeSearch|func|yes||
placeholder|string|no|&lt;See the source code&gt;|
required|bool|no|false|
searchValue|string|no|&lt;See the source code&gt;|
selectedItems|array|no|&lt;See the source code&gt;|
sortItems|bool|no|false|
-----
**src/controls/general-purpose/ctrl-multiselect-field/multiselect-check-all.js**

### 1. CtrlMultiselectCheckAll




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||
onSelect|func|yes||
onUnselect|func|yes||
isSelected|bool|yes||
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-multiselect-field/multiselect-check.js**

### 1. CtrlMultiselectCheck




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
color|enum|no|&lt;See the source code&gt;|
description|string|yes||
id|string|yes||
isSelected|bool|yes||
itemValue|string|yes||
name|string|no|null|
onSelect|func|yes||
onUnselect|func|yes||
-----
**src/controls/general-purpose/ctrl-multiselect-field/multiselect-search.js**

### 1. CtrlMultiselectSearch




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
id|string|yes||
onChange|func|yes||
placeholder|string|no|&lt;See the source code&gt;|
value|string|no|&lt;See the source code&gt;|
visible|bool|yes||
-----
**src/controls/general-purpose/ctrl-open-dialog-button/index.js**

### 1. CtrlOpenDialogButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|null|
classes|object|yes||
color|string|no|&lt;See the source code&gt;|
content|element|yes||
icon|string|no|null|
id|string|yes||
text|string|no|null|
title|string|yes||
tooltip|string|no|null|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-select-field/index.js**

### 1. CtrlSelectField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
allowUnselect|bool|no|false|
autoFocus|bool|no|false|
className|string|no|null|
classes|object|yes||
disabled|bool|no|false|
id|string|yes||
itemDesProp|string|no|&lt;See the source code&gt;|
itemValProp|string|no|&lt;See the source code&gt;|
items|array|yes||
label|string|no|null|
name|string|no|null|
onBlur|func|no|null|
onChange|func|yes||
onFocus|func|no|null|
renderItem|func|no|null|
required|bool|no|false|
showErrors|bool|no|true|
value|union|no|null|
variant|enum|no|DEFAULT_FIELD_VARIANT|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-switch-field/index.js**

### 1. CtrlSwitchField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
autoFocus|bool|no|false|
className|string|no|null|
classes|object|yes||
disabled|bool|no|false|
id|string|yes||
label|string|yes||
labelColor|enum|no|&lt;See the source code&gt;|
name|string|no|null|
onBlur|func|no|null|
onChange|func|yes||
onFocus|func|no|null|
required|bool|no|false|
showErrors|bool|no|true|
value|bool|yes||
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-table/index.js**

### 1. CtrlTable




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|null|
classes|object|yes||
columns|arrayOf|yes||
data|array|yes||
exportName|string|no|null|
groupable|bool|no|false|
height|number|no|null|
id|string|yes||
pageable|bool|no|false|
reorderable|bool|no|true|
resizable|bool|no|true|
serverSidePagination|shape|no|null|
serverSideSorting|shape|no|null|
sortable|bool|no|false|
toolbarOptions|shape|no|&lt;See the source code&gt;|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-table/pagination.js**

### 1. CtrlPagination




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|null|
classes|object|yes||
id|string|yes||
onChangePageNumber|func|yes||
onChangePageSize|func|yes||
pageCount|number|yes||
pageNumber|number|yes||
pageSize|number|yes||
recordCount|number|yes||
rowsPerPageOptions|array|yes||
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-text-field/icon.js**

### 1. CtrlIcon




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classes|object|yes||
helpText|string|no|null|
icon|string|no|null|
id|string|yes||
onIconClick|func|no|null|
-----
**src/controls/general-purpose/ctrl-text-field/index.js**

### 1. CtrlTextField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
autoFocus|bool|no|false|
className|string|no|null|
classes|object|yes||
dateFormat|string|no|&lt;See the source code&gt;|
decimals|number|no|0|
disabled|bool|no|false|
expectedValue|union|no|undefined|
helpText|string|no|null|
icon|string|no|null|
id|string|yes||
label|string|no|null|
maxLength|number|no|Number.MAX_SAFE_INTEGER|
maxValue|union|no|null|
minLength|number|no|0|
minValue|union|no|null|
name|string|no|null|
onBlur|func|no|null|
onChange|func|no|null|
onEnter|func|no|null|
onFocus|func|no|null|
onIconClick|func|no|null|
placeholder|string|no|null|
regexPattern|object|no|null|
required|bool|no|false|
showErrors|bool|no|true|
textTransform|enum|no|&lt;See the source code&gt;|
type|enum|no|&lt;See the source code&gt;|
value|union|no|null|
variant|enum|no|DEFAULT_FIELD_VARIANT|
visible|bool|no|true|
-----
**src/controls/general-purpose/ctrl-tree-view/index.js**

### 1. CtrlTreeView




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actions|arrayOf|no|&lt;See the source code&gt;|
allowContextualOptions|bool|no|false|
className|string|no|null|
classes|object|yes||
collapseAll|bool|no||
collapseIcon|string|no|&lt;See the source code&gt;|
collapseLabel|string|no|null|
expandIcon|string|no|&lt;See the source code&gt;|
expandLabel|string|no|null|
expandedItems|array|yes||
id|string|yes||
itemValProp|string|yes||
items|arrayOf|yes||
noChildrenIcon|string|no|&lt;See the source code&gt;|
onCollapseItem|func|yes||
onExpandItem|func|yes||
renderItem|func|yes||
visible|bool|no|true|
expandAll||no|false|
-----
**src/controls/general-purpose/ctrl-tree-view/tree-view-item.js**

### 1. CtrlTreeViewItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actions|arrayOf|no|&lt;See the source code&gt;|
allowContextualOptions|bool|no|false|
children|union|no|null|
className|string|no|null|
classes|object|yes||
collapseIcon|string|no|&lt;See the source code&gt;|
collapseLabel|string|no|null|
expandIcon|string|no|&lt;See the source code&gt;|
expandLabel|string|no|null|
isExpanded|bool|yes||
item|shape|yes||
itemValProp|string|yes||
level|number|yes||
noChildrenIcon|string|no|&lt;See the source code&gt;|
onCollapseItem|func|yes||
onExpandItem|func|yes||
renderItem|func|yes||
visible|bool|no|true|
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
