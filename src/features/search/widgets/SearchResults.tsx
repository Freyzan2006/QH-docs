import { useAtomValue } from 'jotai';

import { linkAtom } from '@/features/doc-working';
import { searchByName } from '../utils/search.utils';
import { SearchFoundsItem } from '../ux/SearchFoundsItem';

import { useMemo } from 'react';
import { searchValueAtom } from '../store/search-value.store';
import { SearchNotFound } from '../ui/SearchNotFound';

export const SearchResults: React.FC = () => {
  const searchValue = useAtomValue(searchValueAtom);
  const linkState = useAtomValue(linkAtom);

  const filteredLinks = useMemo(() => {
    return searchByName(linkState.links, searchValue);
  }, [linkState.links, searchValue]);

  if (searchValue.length > 0 && filteredLinks.length === 0) {
    return <SearchNotFound />;
  }

  return (
    <ul className="divide-y divide-gray-200 flex flex-col gap-3 items-center w-full overflow-y-auto h-[400px]">
      {filteredLinks.map((link) => (
        <SearchFoundsItem key={`${link.id}-${link.name}`} {...link} />
      ))}
    </ul>
  );
};
