import { IPay, Pay } from './Pay.class.js';

type TCash = IPay;

export class Cash extends Pay implements TCash {}
