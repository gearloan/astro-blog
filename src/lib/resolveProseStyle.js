export function resolveProseStyle(post, context = {}) {
  return (
    context.forcedProseStyle ??
    post.postPresentationSettings?.proseStyle ??
    'prose-editorial'
  );
}

