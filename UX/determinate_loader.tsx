const [isLoading, setIsLoading] = useState<Boolean>(true);
const [loaderStatus, setLoaderStatus] = useState<number>(0);

const startProgressBar = () => {
  const interval = setInterval(() => {
    setLoaderStatus((prev) => {
      if (prev > 85) {
        clearInterval(interval);
        return prev;
      }

      return prev + 5;
    });
  }, 500);

  return interval;
};