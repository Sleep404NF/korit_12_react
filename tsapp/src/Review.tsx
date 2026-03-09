import React, { useState } from 'react'

export default function Review() {
  const [name, setName] = useState<string|null>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ( name === null || name.trim() === '') {
      alert('이름을 입력해주세요.');
      return;
    }
    alert(`hello, ${name}!`);

    setName('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChange}
        />
        <input type="submit" value="제출" />
      </form>
    </>
  )
}