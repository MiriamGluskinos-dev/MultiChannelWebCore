import { jsx } from 'react/jsx-runtime';
import React__default, { forwardRef } from 'react';
import { createComponent } from '@lit/react';
import { SearchField as SearchField$1 } from '@igds/core-web/search-field';
export { SearchField as SearchFieldWC } from '@igds/core-web/search-field';
import { IGDS_EVENTS, IGDS_TAGS } from '@igds/core-web/constants';

const SearchFieldComponent = createComponent({
  react: React__default,
  tagName: IGDS_TAGS.searchField,
  elementClass: SearchField$1,
  events: {
    onIgdsInput: IGDS_EVENTS.input,
    onIgdsSearch: IGDS_EVENTS.search,
    onIgdsClear: IGDS_EVENTS.clear,
    onIgdsSelect: IGDS_EVENTS.select
  }
});
const SearchField = forwardRef((props, ref) => {
  return jsx(SearchFieldComponent, {
    ...props,
    ref: ref
  });
});

export { SearchField };
