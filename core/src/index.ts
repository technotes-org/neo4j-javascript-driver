/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  newError,
  Neo4jError,
  PROTOCOL_ERROR,
  SERVICE_UNAVAILABLE,
  SESSION_EXPIRED
} from './error.ts'
import Integer, { int, isInt, inSafeRange, toNumber, toString } from './integer.ts'
import {
  Date,
  DateTime,
  Duration,
  isDate,
  isDateTime,
  isDuration,
  isLocalDateTime,
  isLocalTime,
  isTime,
  LocalDateTime,
  LocalTime,
  Time
} from './temporal-types.ts'
import {
  StandardDate,
  NumberOrInteger,
  Node,
  isNode,
  Relationship,
  isRelationship,
  UnboundRelationship,
  isUnboundRelationship,
  Path,
  isPath,
  PathSegment,
  isPathSegment
} from './graph-types.ts'
import Record from './record.ts'
import { isPoint, Point } from './spatial-types.ts'
import ResultSummary, {
  queryType,
  ServerInfo,
  Notification,
  NotificationPosition,
  Plan,
  ProfiledPlan,
  QueryStatistics,
  Stats
} from './result-summary.ts'
import Result, { QueryResult, ResultObserver } from './result.ts'
import ConnectionProvider from './connection-provider.ts'
import Connection from './connection.ts'
import Transaction from './transaction.ts'
import Session, { TransactionConfig } from './session.ts'
import Driver, * as driver from './driver.ts'
import * as types from './types.ts'
import * as json from './json.ts'
import * as internal from './internal/index.ts' // todo: removed afterwards

/**
 * Object containing string constants representing predefined {@link Neo4jError} codes.
 */
const error = {
  SERVICE_UNAVAILABLE,
  SESSION_EXPIRED,
  PROTOCOL_ERROR
}

/**
 * @private
 */
const forExport = {
  newError,
  Neo4jError,
  error,
  Integer,
  int,
  isInt,
  inSafeRange,
  toNumber,
  toString,
  internal,
  isPoint,
  Point,
  Date,
  DateTime,
  Duration,
  isDate,
  isDateTime,
  isDuration,
  isLocalDateTime,
  isLocalTime,
  isTime,
  LocalDateTime,
  LocalTime,
  Time,
  Node,
  isNode,
  Relationship,
  isRelationship,
  UnboundRelationship,
  isUnboundRelationship,
  Path,
  isPath,
  PathSegment,
  isPathSegment,
  Record,
  ResultSummary,
  queryType,
  ServerInfo,
  Notification,
  Plan,
  ProfiledPlan,
  QueryStatistics,
  Stats,
  Result,
  Transaction,
  Session,
  Driver,
  Connection,
  types,
  driver,
  json
}

export {
  newError,
  Neo4jError,
  error,
  Integer,
  int,
  isInt,
  inSafeRange,
  toNumber,
  toString,
  internal,
  isPoint,
  Point,
  Date,
  DateTime,
  Duration,
  isDate,
  isDateTime,
  isDuration,
  isLocalDateTime,
  isLocalTime,
  isTime,
  LocalDateTime,
  LocalTime,
  Time,
  StandardDate,
  NumberOrInteger,
  Node,
  isNode,
  Relationship,
  isRelationship,
  UnboundRelationship,
  isUnboundRelationship,
  Path,
  isPath,
  PathSegment,
  isPathSegment,
  Record,
  ResultSummary,
  queryType,
  ServerInfo,
  Notification,
  NotificationPosition,
  Plan,
  ProfiledPlan,
  QueryStatistics,
  Stats,
  Result,
  QueryResult,
  ResultObserver,
  ConnectionProvider,
  Connection,
  Transaction,
  Session,
  TransactionConfig,
  Driver,
  types,
  driver,
  json
}

export default forExport
