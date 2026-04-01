# Test Project

This is a test repository for React components.

## AI Error Resolution Scope

This flow can resolve errors where AI can infer a safe code change from logs and repository context.

### Most likely resolvable

- Frontend build and type errors
- Missing or incorrect imports
- Wrong export names
- JSX and TSX compile issues
- Vite and tsconfig mismatches
- Dependency script or config mistakes in package.json
- Simple environment or config wiring bugs in code

### Partially resolvable

- Runtime bugs with clear stack traces in deployment logs
- Small backend logic bugs with obvious fix paths

### Usually not resolvable automatically

- Missing secret or environment variables in Vercel dashboard
- External service outages such as DB down or API outage
- Infrastructure or permission issues
- Complex architectural bugs requiring large refactors
- Cases where logs are too vague and no clear patch can be inferred
