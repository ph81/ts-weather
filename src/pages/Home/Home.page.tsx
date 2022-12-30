import Forecast from '../../components/Forecast';
import Search from '../../components/Search';
import useForecast from '../../utils/hooks/useForecast';

const Home = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

  console.log(forecast);

  return (
    <>
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Home;
