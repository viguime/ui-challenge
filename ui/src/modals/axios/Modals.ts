import { AxiosResponse, AxiosError } from 'axios';
import { DispatchProp } from 'react-redux';
import { AppState } from 'state_management/store';

export interface AxiosRequestPayload<TData = undefined> {
  payload: {
    request: {
      headers?: {
        'Content-Type': 'multipart/form-data';
      };
      method: 'get' | 'post' | 'delete' | 'put' | 'patch';
      url: string;
      data?: TData;
      params?: TData;
    };
    options?: {
      onSuccess?: (payload: { response: AxiosResponse; getState: () => AppState } & DispatchProp) => void;
      onError?: (payload: { error: AxiosError } & DispatchProp) => void;
    };
  };
}

export interface AxiosSuccessPayload<TData, T, TPreviousAction> {
  payload: {
    type: T;
  } & AxiosResponse<TData>;
  meta: {
    previousAction: TPreviousAction;
  };
}

export interface AxiosErrorPayload<T, TPreviousAction> {
  type: T;
  error: AxiosError;
  meta?: {
    previousAction: TPreviousAction;
  };
}
