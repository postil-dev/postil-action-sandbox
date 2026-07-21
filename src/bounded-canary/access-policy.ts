export type AccessContext = {
  repositoryEnabled: boolean;
  installationActive: boolean;
  headMatches: boolean;
  authorTrusted: boolean;
};

export function canPublishReview(context: AccessContext): boolean {
  return (
    context.repositoryEnabled &&
    context.installationActive &&
    context.headMatches &&
    context.authorTrusted
  );
}
