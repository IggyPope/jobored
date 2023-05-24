'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import vacanciesApiService from '@/services/api/vacancies/vacanciesApiService';
import cleanUpQueryParams from '@/utils/cleanUpQueryParams';

export const FiltersContext = createContext();

const FiltersContextProvider = ({ children }) => {
  const router = useRouter();

  const [vacancies, setVacancies] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [catalogue, setCatalogue] = useState(null);
  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    router.isReady &&
      router.pathname.split('/')[1] === 'vacancies' &&
      !router.query.id &&
      vacanciesApiService
        .getMany(router.query)
        .then((res) => setVacancies(res))
        .then(() => {
          setPage(Number(router.query.page) || 1);
          setCatalogue(router.query.catalogues?.toString() || null);
          setPaymentFrom(Number(router.query.payment_from) || '');
          setPaymentTo(Number(router.query.payment_to) || '');
          setKeyword(router.query.keyword ?? '');
        })
        .finally(() => setIsLoading(false));
  }, [router]);

  const handleApplyFilters = () => {
    setPage(1);

    const newQuery = {
      ...router.query,
      page: 1,
      keyword: keyword,
      catalogues: catalogue,
      payment_from: paymentFrom,
      payment_to: paymentTo,
    };

    const cleanRouterQuery = cleanUpQueryParams(newQuery);

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...cleanRouterQuery,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleResetFilters = () => {
    const newQuery = {
      page: 1,
      keyword: keyword,
    };

    const cleanRouterQuery = cleanUpQueryParams(newQuery);

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...cleanRouterQuery,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <FiltersContext.Provider
      value={{
        handleApplyFilters,
        handlePageChange,
        handleResetFilters,
        vacancies,
        catalogue,
        setCatalogue,
        paymentFrom,
        setPaymentFrom,
        paymentTo,
        setPaymentTo,
        keyword,
        setKeyword,
        page,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);

export default FiltersContextProvider;
