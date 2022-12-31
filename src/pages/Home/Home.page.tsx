import { useNavigate } from 'react-router-dom';
import Forecast from '../../components/Forecast';
import Search from '../../components/Search';
import Button from '../../components/Button';
import useForecast from '../../utils/hooks/useForecast';

const Home = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <main className="flex justify-center items-center">
      <section className="flex flex-col">
        {forecast ? (
          <>
            <Forecast data={forecast} />
            <div className="mx-auto px-2 py-4">
              <Button
                title="Search new location"
                onClick={refreshPage}
                className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
              />
            </div>
          </>
        ) : (
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      </section>
    </main>
  );
};

export default Home;
