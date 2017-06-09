import { RECEIPTS_SUCCESS } from './types';

export default function getReceipts(receipts) {
  return dispatch => {
    dispatch(parseReceipts(receipts));
  };
}

const parseReceipts = (receipts) => {
  return {
    type: RECEIPTS_SUCCESS,
    receipts
  };
};