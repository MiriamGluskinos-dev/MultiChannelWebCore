# @igds/react

This library was generated with [Nx](https://nx.dev).

The shared library contains the components of package @igds/core-web wrapped in the React framework interface using [@lit/react](https://lit.dev/docs/frameworks/react/).

To navigate, search and interact with UI components library run [Storybook](https://storybook.js.org/) after @igds/core-web `build` command in a separate shell or together in parallel with `build:watch`:

```bash
pnpm storybook
```

## Coding conventions (Code Style Guides)

### 1. **Package Structure & Organization**
   - Organize components under meaningful directories:
     - Each component should have its own folder.
     - Follow the structure: `/src/{componentName}/`
   - Include the following files for each component:
     - `index.ts` (exports the React component)
     - `ComponentName.tsx` (the actual React wrapper)
     - `__tests__/ComponentName.test.tsx` (unit tests)
     - `__tests__/ComponentName.test.helper.tsx` (test helper)

### 2. **Naming Conventions**
   - **Component Naming**: Use `PascalCase` for React components and web components.
     ```typescript
     // Correct
     const Button = ...
     // Incorrect
     const button = ...
     ```
   - **Filename Conventions**: Follow `PascalCase` for filenames that represent components:
     ```bash
     src/button/Button.tsx
     ```

### 3. **TypeScript Usage**
   - **Typing Props**: Use TypeScript's `interface` or `type` to define props. Always provide explicit types, especially when interacting with web components.
     ```typescript
     interface ButtonProps {
       label: string;
       disabled?: boolean;
     }
     ```
   - **Avoid `any`**: Always use strict typing (`unknown` if necessary) instead of `any`.

### 4. **Interfacing with Web Components**
   - Use the `@lit/react` `createComponent` method to create React wrappers for your web components. Import the component as follows:
     ```typescript
     import '@igds/tokens'; // Design tokens import
     import { createComponent } from '@lit/react';
     import {Button as ButtonClass, IGDS_TAGS} from '@igds/core-web';
     import {ComponentProps} from 'react';

     const ButtonComponent = createComponent({
        react: React,
        tagName: IGDS_TAGS.button,
        elementClass: ButtonClass,
     });

     type IButtonProp = ComponentProps<typeof ButtonComponent>;

     export const Button = (props: IButtonProp) => {
        return <ButtonComponent {...props} />;
     };
     ```
   - **Property Mapping**: Ensure proper mapping of React props to web component attributes and properties.

### 5. **Props Handling**
   - Use React conventions for props such as `children`, `onClick`, etc.
   - **Avoid exposing direct DOM manipulation methods** like `querySelector` or `getElementById` inside React components. Instead, provide idiomatic React interfaces.
   - Use `useEffect` or `useRef` hooks to manage interaction with the DOM when necessary.

### 6. **Events Handling**
   - Use React's synthetic event system when possible. However, for custom web component events, ensure proper dispatching and event typing:
     ```typescript
     const handleCustomEvent = (event: CustomEvent) => {
       console.log(event.detail);
     };

     return <Button onCustomEvent={handleCustomEvent} />;
     ```
   - If necessary, convert custom web component events into React's event system.

### 7. **State Management**
   - **Stateless Components**: Your React wrappers should remain stateless. They should only handle event propagation and pass through data to the web components.
   - Use `useState` or `useReducer` in the parent components if you need to manage state that affects the web components.

### 8. **Styling**
   - **Use IGDS tokens**: add global styles to `@igds/tokens/src/index.css`.
   - Styles are expected to be encapsulated inside a web component.

### 9. **Accessibility (A11y)**
   - Ensure that each component is accessible by:
     - Defining appropriate ARIA roles, attributes, and labels.
     - Ensuring keyboard navigation support (e.g., `tabindex`).
   - Use the `react-aria` or `aria-live` attributes for dynamic updates.
     ```tsx
     <Button aria-label="Submit Form" />
     ```

### 10. **Testing**
   - **Unit Testing**: Use Vitest and React Testing Library to test your wrapper components.
   - **Custom Web Component Testing**: Ensure that custom events and properties are tested correctly:
     ```typescript
     describe('Button', () => {
        it('renders the button component', () => {
            render(Button label="Click Me" />);
            const buttonElement = screen.getByText(/Click Me/i);
            expect(buttonElement).toBeInTheDocument();
        });
     });
     ```
   - Mock web components where necessary.

