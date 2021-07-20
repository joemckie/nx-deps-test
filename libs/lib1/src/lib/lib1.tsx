import { HomeScreen } from '@dep-test/lib2';

export type TestType = {
  test:true
}

function Test() {
  return <HomeScreen test />
}

export function lib1(): string {
  return 'lib1';
}
