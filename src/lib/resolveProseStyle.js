export function resolveProseStyle(post, context = {}) {
  return (
    context.forcedProseStyle ??
    post.presentationSettings?.proseStyle ??
    'prose-editorial'
  );
}

