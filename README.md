# react-dropdown-hook
This hook will help you build not only a dropdown menu, but also any actions that require the use of observers in native JS mouse clicks were outside of the item.

# Install

```bash 
npm i react-dropdown-hook
```
or

```bash
yarn add react-dropdown-hook
```

# Usage example

```javascript
import { FC } from "react";
import useDropdown from 'react-dropdown-hook';

export const App: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
	return (
		<div>
			<div ref={wrapperRef}>
                <div onClick={toggleDropdown}>
                    Click me to open menu or other elemet
                </div>
				{dropdownOpen &&
					<>
						{/**Expanded items */}
					</> 
				}
			</div>
			<div onClick={closeDropdown}>Close menu after this click</div>
		</div>
	)
}
```

This hook will observe clicks outside the container (`wrapperRef`) and change `dropdownOpen` props when they happen. 

# Exports

**wrapperRef**

- Type: `RefObject<HTMLDivElement>`
- Description: ref for your observable container

**dropdownOpen**

- Type: `boolean`
- Default: `False`
- Description: Props informing about the state of your container. `True` id open, `False` is closed.

**toggleDropdown**

- Type: `Function`
- Description: This function toggle the state

**closeDropdown**

- Type: `Function`
- Description: This function change state always to `false`




