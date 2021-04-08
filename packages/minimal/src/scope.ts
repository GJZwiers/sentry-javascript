import {
  Breadcrumb,
  BreadcrumbHint,
  Context,
  EventProcessor,
  Extra,
  Extras,
  Primitive,
  ScopeContext,
  ScopeLike,
  Session,
  SessionContext,
  Severity,
  Span,
  Transaction,
  User,
} from '@sentry/types';

import { getCurrentClient } from './carrier';

export function configureScope(callback: (scope: ScopeLike) => void): void {
  const client = getCurrentClient();
  if (client) {
    callback(client.getScope());
  }
}

export function withScope(callback: (scope: ScopeLike) => void): void {
  const client = getCurrentClient();

  if (client) {
    const currentScope = client.getScope();
    const newScope = currentScope.clone();
    try {
      client.setScope(newScope);
      callback(newScope);
    } catch (_oO) {
      // no-empty
    }
    client.setScope(currentScope);
  }
}

// TODO: Used in Electron and RN
// export function addScopeListener(callback: (scope: ScopeLike) => void): void {
//   return getCurrentClient()?.getScope().addScopeListener(callback)
// }

export function clone(): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.clone();
}

// TODO: Should we return void?
export function addEventProcessor(callback: EventProcessor): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.addEventProcessor(callback);
}

export function setUser(user: User | null): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setUser(user);
}

export function getUser(): User | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.getUser();
}

export function setTags(tags: { [key: string]: Primitive }): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setTags(tags);
}

export function setTag(key: string, value: Primitive): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setTag(key, value);
}

export function setExtras(extras: Extras): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setExtras(extras);
}

export function setExtra(key: string, value: Extra): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setExtra(key, value);
}

export function setFingerprint(fingerprint: string[]): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setFingerprint(fingerprint);
}

export function setLevel(level: Severity): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setLevel(level);
}

export function setTransactionName(name?: string): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setTransactionName(name);
}

export function setContext(key: string, value: Context | null): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setContext(key, value);
}

export function setSpan(span?: Span): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setSpan(span);
}

export function getSpan(): Span | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.getSpan();
}

export function getTransaction(): Transaction | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.getTransaction();
}

export function setSession(session?: Session): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.setSession(session);
}

export function getSession(): SessionContext | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.getSession();
}

export function update(scope?: ScopeContext): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.update(scope);
}

export function clear(): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.clear();
}

export function addBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.addBreadcrumb(breadcrumb, hint);
}

export function clearBreadcrumbs(): ScopeLike | undefined {
  return getCurrentClient()
    ?.getScope()
    ?.clearBreadcrumbs();
}
