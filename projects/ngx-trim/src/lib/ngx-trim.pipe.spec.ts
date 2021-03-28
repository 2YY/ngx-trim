import { NgxTrimPipe } from './ngx-trim.pipe';

describe('NgxTrimPipe', () => {
  let pipe: NgxTrimPipe;
  const sourceString = 'I bought many oranges.';

  beforeEach(() => {
    pipe = new NgxTrimPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should not change content string', () => {
    expect(pipe.transform(sourceString)).toBe(sourceString);
  });
  it('Should trim half-width space', () => {
    expect(pipe.transform(`  ${sourceString} `)).toBe(sourceString);
  });
  it('Should trim full-width space', () => {
    expect(pipe.transform(`　　${sourceString}　`)).toBe(sourceString);
  });
  it('Should trim tab', () => {
    expect(pipe.transform(`\t\t${sourceString}\t`)).toBe(sourceString);
  });
  it('Should trim new line', () => {
    expect(pipe.transform(`\n\n${sourceString}\n`)).toBe(sourceString);
  });
  it('Should trim various non printable characters', () => {
    expect(pipe.transform(` 　 　\t\n\t\n${sourceString} 　\t\n`)).toBe(sourceString);
  });
});
