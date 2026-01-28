# Hooks Directory

This directory contains custom React hooks for reusable logic.

## Available Hooks

### `useScrollToSection`

A custom hook for smooth scrolling to sections on the page.

**Features:**
- Smooth scroll to any section by ID
- Optional header offset compensation
- Callback after scroll completion
- Scroll to top functionality

**Usage:**

```javascript
import { useScrollToSection } from "../../hooks";

function MyComponent() {
  // Basic usage
  const { scrollToSection, scrollToTop } = useScrollToSection();

  // With header offset (for fixed headers)
  const { scrollToSection } = useScrollToSection({
    withHeaderOffset: true,
  });

  // With callback
  const { scrollToSection } = useScrollToSection({
    onScrollComplete: () => console.log("Scroll completed!"),
  });

  return (
    <button onClick={() => scrollToSection("about")}>
      Go to About
    </button>
  );
}
```

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `options.withHeaderOffset` | boolean | false | Accounts for fixed header height |
| `options.onScrollComplete` | function | undefined | Callback executed after scroll |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| `scrollToSection` | function | Scrolls to a section by ID |
| `scrollToTop` | function | Scrolls to the top of the page |

**Examples:**

```javascript
// Example 1: Simple scroll to section
const { scrollToSection } = useScrollToSection();
scrollToSection("projects");

// Example 2: With header offset and menu close
const { scrollToSection } = useScrollToSection({
  withHeaderOffset: true,
  onScrollComplete: () => setMenuOpen(false),
});
scrollToSection("contacts");

// Example 3: Scroll to top
const { scrollToTop } = useScrollToSection();
scrollToTop();
```

## Creating New Hooks

When creating new custom hooks:

1. Create a new file in this directory (e.g., `useMyHook.js`)
2. Export the hook as a named export
3. Add the export to `index.js`
4. Document the hook in this README
5. Follow the naming convention: `use[HookName]`

## Best Practices

- Keep hooks focused on a single responsibility
- Document parameters and return values
- Include usage examples
- Export through `index.js` for clean imports
- Use TypeScript or JSDoc for type hints (optional)
