
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model P2pTransfer
 * 
 */
export type P2pTransfer = $Result.DefaultSelection<Prisma.$P2pTransferPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more P2pTransfers
 * const p2pTransfers = await prisma.p2pTransfer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more P2pTransfers
   * const p2pTransfers = await prisma.p2pTransfer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.p2pTransfer`: Exposes CRUD operations for the **P2pTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2pTransfers
    * const p2pTransfers = await prisma.p2pTransfer.findMany()
    * ```
    */
  get p2pTransfer(): Prisma.P2pTransferDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    P2pTransfer: 'P2pTransfer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "p2pTransfer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      P2pTransfer: {
        payload: Prisma.$P2pTransferPayload<ExtArgs>
        fields: Prisma.P2pTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.P2pTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.P2pTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          findFirst: {
            args: Prisma.P2pTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.P2pTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          findMany: {
            args: Prisma.P2pTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>[]
          }
          create: {
            args: Prisma.P2pTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          createMany: {
            args: Prisma.P2pTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.P2pTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>[]
          }
          delete: {
            args: Prisma.P2pTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          update: {
            args: Prisma.P2pTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          deleteMany: {
            args: Prisma.P2pTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.P2pTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.P2pTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          aggregate: {
            args: Prisma.P2pTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2pTransfer>
          }
          groupBy: {
            args: Prisma.P2pTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.P2pTransferCountArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model P2pTransfer
   */

  export type AggregateP2pTransfer = {
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  export type P2pTransferAvgAggregateOutputType = {
    amount: number | null
  }

  export type P2pTransferSumAggregateOutputType = {
    amount: bigint | null
  }

  export type P2pTransferMinAggregateOutputType = {
    id: string | null
    senderUserId: string | null
    recipientUserId: string | null
    senderLedgerAcc: string | null
    recipLedgerAcc: string | null
    amount: bigint | null
    currency: string | null
    note: string | null
    status: string | null
    ledgerTxId: string | null
    createdAt: Date | null
  }

  export type P2pTransferMaxAggregateOutputType = {
    id: string | null
    senderUserId: string | null
    recipientUserId: string | null
    senderLedgerAcc: string | null
    recipLedgerAcc: string | null
    amount: bigint | null
    currency: string | null
    note: string | null
    status: string | null
    ledgerTxId: string | null
    createdAt: Date | null
  }

  export type P2pTransferCountAggregateOutputType = {
    id: number
    senderUserId: number
    recipientUserId: number
    senderLedgerAcc: number
    recipLedgerAcc: number
    amount: number
    currency: number
    note: number
    status: number
    ledgerTxId: number
    createdAt: number
    _all: number
  }


  export type P2pTransferAvgAggregateInputType = {
    amount?: true
  }

  export type P2pTransferSumAggregateInputType = {
    amount?: true
  }

  export type P2pTransferMinAggregateInputType = {
    id?: true
    senderUserId?: true
    recipientUserId?: true
    senderLedgerAcc?: true
    recipLedgerAcc?: true
    amount?: true
    currency?: true
    note?: true
    status?: true
    ledgerTxId?: true
    createdAt?: true
  }

  export type P2pTransferMaxAggregateInputType = {
    id?: true
    senderUserId?: true
    recipientUserId?: true
    senderLedgerAcc?: true
    recipLedgerAcc?: true
    amount?: true
    currency?: true
    note?: true
    status?: true
    ledgerTxId?: true
    createdAt?: true
  }

  export type P2pTransferCountAggregateInputType = {
    id?: true
    senderUserId?: true
    recipientUserId?: true
    senderLedgerAcc?: true
    recipLedgerAcc?: true
    amount?: true
    currency?: true
    note?: true
    status?: true
    ledgerTxId?: true
    createdAt?: true
    _all?: true
  }

  export type P2pTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2pTransfer to aggregate.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned P2pTransfers
    **/
    _count?: true | P2pTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: P2pTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: P2pTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2pTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2pTransferMaxAggregateInputType
  }

  export type GetP2pTransferAggregateType<T extends P2pTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateP2pTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2pTransfer[P]>
      : GetScalarType<T[P], AggregateP2pTransfer[P]>
  }




  export type P2pTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2pTransferWhereInput
    orderBy?: P2pTransferOrderByWithAggregationInput | P2pTransferOrderByWithAggregationInput[]
    by: P2pTransferScalarFieldEnum[] | P2pTransferScalarFieldEnum
    having?: P2pTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2pTransferCountAggregateInputType | true
    _avg?: P2pTransferAvgAggregateInputType
    _sum?: P2pTransferSumAggregateInputType
    _min?: P2pTransferMinAggregateInputType
    _max?: P2pTransferMaxAggregateInputType
  }

  export type P2pTransferGroupByOutputType = {
    id: string
    senderUserId: string
    recipientUserId: string
    senderLedgerAcc: string
    recipLedgerAcc: string
    amount: bigint
    currency: string
    note: string | null
    status: string
    ledgerTxId: string | null
    createdAt: Date
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  type GetP2pTransferGroupByPayload<T extends P2pTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2pTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2pTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
            : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
        }
      >
    >


  export type P2pTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderUserId?: boolean
    recipientUserId?: boolean
    senderLedgerAcc?: boolean
    recipLedgerAcc?: boolean
    amount?: boolean
    currency?: boolean
    note?: boolean
    status?: boolean
    ledgerTxId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["p2pTransfer"]>

  export type P2pTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderUserId?: boolean
    recipientUserId?: boolean
    senderLedgerAcc?: boolean
    recipLedgerAcc?: boolean
    amount?: boolean
    currency?: boolean
    note?: boolean
    status?: boolean
    ledgerTxId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["p2pTransfer"]>

  export type P2pTransferSelectScalar = {
    id?: boolean
    senderUserId?: boolean
    recipientUserId?: boolean
    senderLedgerAcc?: boolean
    recipLedgerAcc?: boolean
    amount?: boolean
    currency?: boolean
    note?: boolean
    status?: boolean
    ledgerTxId?: boolean
    createdAt?: boolean
  }


  export type $P2pTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "P2pTransfer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderUserId: string
      recipientUserId: string
      senderLedgerAcc: string
      recipLedgerAcc: string
      amount: bigint
      currency: string
      note: string | null
      status: string
      ledgerTxId: string | null
      createdAt: Date
    }, ExtArgs["result"]["p2pTransfer"]>
    composites: {}
  }

  type P2pTransferGetPayload<S extends boolean | null | undefined | P2pTransferDefaultArgs> = $Result.GetResult<Prisma.$P2pTransferPayload, S>

  type P2pTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<P2pTransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: P2pTransferCountAggregateInputType | true
    }

  export interface P2pTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['P2pTransfer'], meta: { name: 'P2pTransfer' } }
    /**
     * Find zero or one P2pTransfer that matches the filter.
     * @param {P2pTransferFindUniqueArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends P2pTransferFindUniqueArgs>(args: SelectSubset<T, P2pTransferFindUniqueArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one P2pTransfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {P2pTransferFindUniqueOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends P2pTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, P2pTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first P2pTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferFindFirstArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends P2pTransferFindFirstArgs>(args?: SelectSubset<T, P2pTransferFindFirstArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first P2pTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferFindFirstOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends P2pTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, P2pTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more P2pTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany()
     * 
     * // Get first 10 P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends P2pTransferFindManyArgs>(args?: SelectSubset<T, P2pTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a P2pTransfer.
     * @param {P2pTransferCreateArgs} args - Arguments to create a P2pTransfer.
     * @example
     * // Create one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.create({
     *   data: {
     *     // ... data to create a P2pTransfer
     *   }
     * })
     * 
     */
    create<T extends P2pTransferCreateArgs>(args: SelectSubset<T, P2pTransferCreateArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many P2pTransfers.
     * @param {P2pTransferCreateManyArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends P2pTransferCreateManyArgs>(args?: SelectSubset<T, P2pTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2pTransfers and returns the data saved in the database.
     * @param {P2pTransferCreateManyAndReturnArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends P2pTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, P2pTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a P2pTransfer.
     * @param {P2pTransferDeleteArgs} args - Arguments to delete one P2pTransfer.
     * @example
     * // Delete one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.delete({
     *   where: {
     *     // ... filter to delete one P2pTransfer
     *   }
     * })
     * 
     */
    delete<T extends P2pTransferDeleteArgs>(args: SelectSubset<T, P2pTransferDeleteArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one P2pTransfer.
     * @param {P2pTransferUpdateArgs} args - Arguments to update one P2pTransfer.
     * @example
     * // Update one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends P2pTransferUpdateArgs>(args: SelectSubset<T, P2pTransferUpdateArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more P2pTransfers.
     * @param {P2pTransferDeleteManyArgs} args - Arguments to filter P2pTransfers to delete.
     * @example
     * // Delete a few P2pTransfers
     * const { count } = await prisma.p2pTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends P2pTransferDeleteManyArgs>(args?: SelectSubset<T, P2pTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends P2pTransferUpdateManyArgs>(args: SelectSubset<T, P2pTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one P2pTransfer.
     * @param {P2pTransferUpsertArgs} args - Arguments to update or create a P2pTransfer.
     * @example
     * // Update or create a P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.upsert({
     *   create: {
     *     // ... data to create a P2pTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2pTransfer we want to update
     *   }
     * })
     */
    upsert<T extends P2pTransferUpsertArgs>(args: SelectSubset<T, P2pTransferUpsertArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferCountArgs} args - Arguments to filter P2pTransfers to count.
     * @example
     * // Count the number of P2pTransfers
     * const count = await prisma.p2pTransfer.count({
     *   where: {
     *     // ... the filter for the P2pTransfers we want to count
     *   }
     * })
    **/
    count<T extends P2pTransferCountArgs>(
      args?: Subset<T, P2pTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2pTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends P2pTransferAggregateArgs>(args: Subset<T, P2pTransferAggregateArgs>): Prisma.PrismaPromise<GetP2pTransferAggregateType<T>>

    /**
     * Group by P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends P2pTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: P2pTransferGroupByArgs['orderBy'] }
        : { orderBy?: P2pTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, P2pTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2pTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the P2pTransfer model
   */
  readonly fields: P2pTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for P2pTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__P2pTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the P2pTransfer model
   */ 
  interface P2pTransferFieldRefs {
    readonly id: FieldRef<"P2pTransfer", 'String'>
    readonly senderUserId: FieldRef<"P2pTransfer", 'String'>
    readonly recipientUserId: FieldRef<"P2pTransfer", 'String'>
    readonly senderLedgerAcc: FieldRef<"P2pTransfer", 'String'>
    readonly recipLedgerAcc: FieldRef<"P2pTransfer", 'String'>
    readonly amount: FieldRef<"P2pTransfer", 'BigInt'>
    readonly currency: FieldRef<"P2pTransfer", 'String'>
    readonly note: FieldRef<"P2pTransfer", 'String'>
    readonly status: FieldRef<"P2pTransfer", 'String'>
    readonly ledgerTxId: FieldRef<"P2pTransfer", 'String'>
    readonly createdAt: FieldRef<"P2pTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * P2pTransfer findUnique
   */
  export type P2pTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer findUniqueOrThrow
   */
  export type P2pTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer findFirst
   */
  export type P2pTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2pTransfers.
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * P2pTransfer findFirstOrThrow
   */
  export type P2pTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2pTransfers.
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * P2pTransfer findMany
   */
  export type P2pTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Filter, which P2pTransfers to fetch.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing P2pTransfers.
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * P2pTransfer create
   */
  export type P2pTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * The data needed to create a P2pTransfer.
     */
    data: XOR<P2pTransferCreateInput, P2pTransferUncheckedCreateInput>
  }

  /**
   * P2pTransfer createMany
   */
  export type P2pTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many P2pTransfers.
     */
    data: P2pTransferCreateManyInput | P2pTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * P2pTransfer createManyAndReturn
   */
  export type P2pTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many P2pTransfers.
     */
    data: P2pTransferCreateManyInput | P2pTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * P2pTransfer update
   */
  export type P2pTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * The data needed to update a P2pTransfer.
     */
    data: XOR<P2pTransferUpdateInput, P2pTransferUncheckedUpdateInput>
    /**
     * Choose, which P2pTransfer to update.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer updateMany
   */
  export type P2pTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update P2pTransfers.
     */
    data: XOR<P2pTransferUpdateManyMutationInput, P2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which P2pTransfers to update
     */
    where?: P2pTransferWhereInput
  }

  /**
   * P2pTransfer upsert
   */
  export type P2pTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * The filter to search for the P2pTransfer to update in case it exists.
     */
    where: P2pTransferWhereUniqueInput
    /**
     * In case the P2pTransfer found by the `where` argument doesn't exist, create a new P2pTransfer with this data.
     */
    create: XOR<P2pTransferCreateInput, P2pTransferUncheckedCreateInput>
    /**
     * In case the P2pTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<P2pTransferUpdateInput, P2pTransferUncheckedUpdateInput>
  }

  /**
   * P2pTransfer delete
   */
  export type P2pTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Filter which P2pTransfer to delete.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer deleteMany
   */
  export type P2pTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2pTransfers to delete
     */
    where?: P2pTransferWhereInput
  }

  /**
   * P2pTransfer without action
   */
  export type P2pTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const P2pTransferScalarFieldEnum: {
    id: 'id',
    senderUserId: 'senderUserId',
    recipientUserId: 'recipientUserId',
    senderLedgerAcc: 'senderLedgerAcc',
    recipLedgerAcc: 'recipLedgerAcc',
    amount: 'amount',
    currency: 'currency',
    note: 'note',
    status: 'status',
    ledgerTxId: 'ledgerTxId',
    createdAt: 'createdAt'
  };

  export type P2pTransferScalarFieldEnum = (typeof P2pTransferScalarFieldEnum)[keyof typeof P2pTransferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type P2pTransferWhereInput = {
    AND?: P2pTransferWhereInput | P2pTransferWhereInput[]
    OR?: P2pTransferWhereInput[]
    NOT?: P2pTransferWhereInput | P2pTransferWhereInput[]
    id?: StringFilter<"P2pTransfer"> | string
    senderUserId?: StringFilter<"P2pTransfer"> | string
    recipientUserId?: StringFilter<"P2pTransfer"> | string
    senderLedgerAcc?: StringFilter<"P2pTransfer"> | string
    recipLedgerAcc?: StringFilter<"P2pTransfer"> | string
    amount?: BigIntFilter<"P2pTransfer"> | bigint | number
    currency?: StringFilter<"P2pTransfer"> | string
    note?: StringNullableFilter<"P2pTransfer"> | string | null
    status?: StringFilter<"P2pTransfer"> | string
    ledgerTxId?: StringNullableFilter<"P2pTransfer"> | string | null
    createdAt?: DateTimeFilter<"P2pTransfer"> | Date | string
  }

  export type P2pTransferOrderByWithRelationInput = {
    id?: SortOrder
    senderUserId?: SortOrder
    recipientUserId?: SortOrder
    senderLedgerAcc?: SortOrder
    recipLedgerAcc?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    ledgerTxId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type P2pTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: P2pTransferWhereInput | P2pTransferWhereInput[]
    OR?: P2pTransferWhereInput[]
    NOT?: P2pTransferWhereInput | P2pTransferWhereInput[]
    senderUserId?: StringFilter<"P2pTransfer"> | string
    recipientUserId?: StringFilter<"P2pTransfer"> | string
    senderLedgerAcc?: StringFilter<"P2pTransfer"> | string
    recipLedgerAcc?: StringFilter<"P2pTransfer"> | string
    amount?: BigIntFilter<"P2pTransfer"> | bigint | number
    currency?: StringFilter<"P2pTransfer"> | string
    note?: StringNullableFilter<"P2pTransfer"> | string | null
    status?: StringFilter<"P2pTransfer"> | string
    ledgerTxId?: StringNullableFilter<"P2pTransfer"> | string | null
    createdAt?: DateTimeFilter<"P2pTransfer"> | Date | string
  }, "id">

  export type P2pTransferOrderByWithAggregationInput = {
    id?: SortOrder
    senderUserId?: SortOrder
    recipientUserId?: SortOrder
    senderLedgerAcc?: SortOrder
    recipLedgerAcc?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    ledgerTxId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: P2pTransferCountOrderByAggregateInput
    _avg?: P2pTransferAvgOrderByAggregateInput
    _max?: P2pTransferMaxOrderByAggregateInput
    _min?: P2pTransferMinOrderByAggregateInput
    _sum?: P2pTransferSumOrderByAggregateInput
  }

  export type P2pTransferScalarWhereWithAggregatesInput = {
    AND?: P2pTransferScalarWhereWithAggregatesInput | P2pTransferScalarWhereWithAggregatesInput[]
    OR?: P2pTransferScalarWhereWithAggregatesInput[]
    NOT?: P2pTransferScalarWhereWithAggregatesInput | P2pTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"P2pTransfer"> | string
    senderUserId?: StringWithAggregatesFilter<"P2pTransfer"> | string
    recipientUserId?: StringWithAggregatesFilter<"P2pTransfer"> | string
    senderLedgerAcc?: StringWithAggregatesFilter<"P2pTransfer"> | string
    recipLedgerAcc?: StringWithAggregatesFilter<"P2pTransfer"> | string
    amount?: BigIntWithAggregatesFilter<"P2pTransfer"> | bigint | number
    currency?: StringWithAggregatesFilter<"P2pTransfer"> | string
    note?: StringNullableWithAggregatesFilter<"P2pTransfer"> | string | null
    status?: StringWithAggregatesFilter<"P2pTransfer"> | string
    ledgerTxId?: StringNullableWithAggregatesFilter<"P2pTransfer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"P2pTransfer"> | Date | string
  }

  export type P2pTransferCreateInput = {
    id?: string
    senderUserId: string
    recipientUserId: string
    senderLedgerAcc: string
    recipLedgerAcc: string
    amount: bigint | number
    currency: string
    note?: string | null
    status: string
    ledgerTxId?: string | null
    createdAt?: Date | string
  }

  export type P2pTransferUncheckedCreateInput = {
    id?: string
    senderUserId: string
    recipientUserId: string
    senderLedgerAcc: string
    recipLedgerAcc: string
    amount: bigint | number
    currency: string
    note?: string | null
    status: string
    ledgerTxId?: string | null
    createdAt?: Date | string
  }

  export type P2pTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: StringFieldUpdateOperationsInput | string
    senderLedgerAcc?: StringFieldUpdateOperationsInput | string
    recipLedgerAcc?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ledgerTxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type P2pTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: StringFieldUpdateOperationsInput | string
    senderLedgerAcc?: StringFieldUpdateOperationsInput | string
    recipLedgerAcc?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ledgerTxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type P2pTransferCreateManyInput = {
    id?: string
    senderUserId: string
    recipientUserId: string
    senderLedgerAcc: string
    recipLedgerAcc: string
    amount: bigint | number
    currency: string
    note?: string | null
    status: string
    ledgerTxId?: string | null
    createdAt?: Date | string
  }

  export type P2pTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: StringFieldUpdateOperationsInput | string
    senderLedgerAcc?: StringFieldUpdateOperationsInput | string
    recipLedgerAcc?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ledgerTxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type P2pTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderUserId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: StringFieldUpdateOperationsInput | string
    senderLedgerAcc?: StringFieldUpdateOperationsInput | string
    recipLedgerAcc?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ledgerTxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type P2pTransferCountOrderByAggregateInput = {
    id?: SortOrder
    senderUserId?: SortOrder
    recipientUserId?: SortOrder
    senderLedgerAcc?: SortOrder
    recipLedgerAcc?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    status?: SortOrder
    ledgerTxId?: SortOrder
    createdAt?: SortOrder
  }

  export type P2pTransferAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type P2pTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    senderUserId?: SortOrder
    recipientUserId?: SortOrder
    senderLedgerAcc?: SortOrder
    recipLedgerAcc?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    status?: SortOrder
    ledgerTxId?: SortOrder
    createdAt?: SortOrder
  }

  export type P2pTransferMinOrderByAggregateInput = {
    id?: SortOrder
    senderUserId?: SortOrder
    recipientUserId?: SortOrder
    senderLedgerAcc?: SortOrder
    recipLedgerAcc?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    note?: SortOrder
    status?: SortOrder
    ledgerTxId?: SortOrder
    createdAt?: SortOrder
  }

  export type P2pTransferSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use P2pTransferDefaultArgs instead
     */
    export type P2pTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = P2pTransferDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}