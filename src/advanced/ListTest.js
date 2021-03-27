function NumberList(props) {

    const numbersNew = [9, 8, 7, 6, 5];

    const numbersNewNew = numbersNew.map((num) => {
        <li>{num}</li>
    });

    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    );
    return ( <>
        <ul>{listItems}</ul>
        <ol>{numbersNewNew}</ol>
      </>
    );
  }
  export default NumberList;