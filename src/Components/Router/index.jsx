export const router = (
  component,
  { path, exact = true, breadcrumb = null }
) => ({
  component,
  path,
  exact,
  breadcrumb
});
