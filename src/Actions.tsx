import React from 'react';
import type { State } from './State';
import { Dispatch } from './App';
import { connect } from 'react-redux';

type ChangeHangover = {
  hangover: number,
}

export interface PushAction {
  type: "push";
  payload: ChangeHangover;
}

