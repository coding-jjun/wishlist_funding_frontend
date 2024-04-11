interface Params {
  params: {
    userId: string;
  };
}

export default async function MyPagePage({ params }: Params) {
  return (
    <>
      <h1>마이 페이지: {params.userId}</h1>
    </>
  );
}
