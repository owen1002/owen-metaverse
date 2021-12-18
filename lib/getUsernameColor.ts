import ColorHash from 'color-hash'

const colorMapper = new Map();
const colorHash = new ColorHash();

export const getUsernameColor = (username:string)=>{
  if (colorMapper.has(username)) return colorMapper.get(username);
  return colorHash.hex(username);
}