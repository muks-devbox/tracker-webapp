// roadmap.js — Topic-track roadmap (v2 rebuild)
// Replaces the week/day model entirely. No dates, no time budgets — untimed checklist.
// 11 tracks | 86 topics | 275 rated subtasks (three-state: shaky/solid/can-teach)
// IDs are slug-based and stable — safe to reorder/insert without breaking Firestore progress docs.

export const roadmap = {
  meta: {
    title: "Senior Java Backend Engineer — Interview Preparation",
    subtitle: "Topic tracks, not weeks — untimed, prerequisite-ordered checklist",
    totalTracks: 11,
    totalTopics: 86,
    totalSubtasks: 275,
    accent: "#1a7a5e",
  },
  tracks: [
  {
    "trackId": "java-core",
    "title": "Java Core & JVM",
    "category": "Language & Platform",
    "topics": [
      {
        "title": "OOP fundamentals refresh",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "java-core.oop-fundamentals-refresh.encapsulation-inheritance-polymorphism",
            "text": "Encapsulation, inheritance, polymorphism",
            "tier": "Core"
          },
          {
            "id": "java-core.oop-fundamentals-refresh.composition-inheritance-when-each-wins",
            "text": "Composition vs inheritance — when each wins",
            "tier": "Core"
          },
          {
            "id": "java-core.oop-fundamentals-refresh.abstract-classes-interfaces-default-methods",
            "text": "Abstract classes vs interfaces, default methods",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "java-core.oop-fundamentals-refresh"
      },
      {
        "title": "Collections framework",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "java-core.collections-framework.list-set-map-contracts-guarantees",
            "text": "List/Set/Map contracts and guarantees",
            "tier": "Core"
          },
          {
            "id": "java-core.collections-framework.arraylist-linkedlist-access-insert-cost",
            "text": "ArrayList vs LinkedList — access/insert cost",
            "tier": "Core"
          },
          {
            "id": "java-core.collections-framework.hashmap-internals-hashing-buckets-load",
            "text": "HashMap internals: hashing, buckets, load factor, resize",
            "tier": "Core"
          },
          {
            "id": "java-core.collections-framework.hashmap-treeification",
            "text": "HashMap treeification (bucket to red-black tree at 8)",
            "tier": "Deep"
          },
          {
            "id": "java-core.collections-framework.treemap-linkedhashmap-ordering-semantics",
            "text": "TreeMap / LinkedHashMap — ordering semantics",
            "tier": "Core"
          },
          {
            "id": "java-core.collections-framework.fail-fast-fail-safe-iterators",
            "text": "Fail-fast vs fail-safe iterators",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "java-core.collections-framework"
      },
      {
        "title": "equals() / hashCode() contract",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "java-core.equals-hashcode-contract.contract-what-breaks-if-violated",
            "text": "The contract and what breaks if violated",
            "tier": "Core"
          },
          {
            "id": "java-core.equals-hashcode-contract.comparable-vs-comparator",
            "text": "Comparable vs Comparator",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "java-core.equals-hashcode-contract"
      },
      {
        "title": "Generics",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "java-core.generics.bounded-types-wildcards",
            "text": "Bounded types, wildcards (? extends / ? super, PECS)",
            "tier": "Core"
          },
          {
            "id": "java-core.generics.type-erasure-its-consequences",
            "text": "Type erasure and its consequences",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "java-core.generics"
      },
      {
        "title": "Exceptions",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "java-core.exceptions.checked-unchecked-when-use-which",
            "text": "Checked vs unchecked, when to use which",
            "tier": "Core"
          },
          {
            "id": "java-core.exceptions.try-with-resources-autocloseable",
            "text": "try-with-resources, AutoCloseable",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "java-core.exceptions"
      },
      {
        "title": "Java 8 functional",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "java-core.java-8-functional.lambdas-functional-interfaces",
            "text": "Lambdas, functional interfaces",
            "tier": "Core"
          },
          {
            "id": "java-core.java-8-functional.streams-intermediate-terminal-laziness",
            "text": "Streams: intermediate vs terminal, laziness",
            "tier": "Core"
          },
          {
            "id": "java-core.java-8-functional.collectors-grouping-custom-collectors",
            "text": "Collectors, grouping, custom collectors",
            "tier": "Deep"
          },
          {
            "id": "java-core.java-8-functional.optional-correct-use-anti-patterns",
            "text": "Optional — correct use, anti-patterns",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "java-core.java-8-functional"
      },
      {
        "title": "Java 9–25 language evolution",
        "tiers": [
          "Core",
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "java-core.java-925-language-evolution.var-records-text-blocks",
            "text": "var, Records, Text blocks",
            "tier": "Core"
          },
          {
            "id": "java-core.java-925-language-evolution.sealed-classes",
            "text": "Sealed classes",
            "tier": "Core"
          },
          {
            "id": "java-core.java-925-language-evolution.pattern-matching-switch-record-patterns",
            "text": "Pattern matching for switch, record patterns",
            "tier": "Core"
          },
          {
            "id": "java-core.java-925-language-evolution.sequenced-collections",
            "text": "Sequenced collections (JDK 21)",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "topicId": "java-core.java-925-language-evolution"
      },
      {
        "title": "JVM & memory",
        "tiers": [
          "Core",
          "Deep",
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "java-core.jvm-memory.memory-areas-heap-stack-metaspace",
            "text": "Memory areas: heap, stack, metaspace",
            "tier": "Core"
          },
          {
            "id": "java-core.jvm-memory.gc-overview-generational-model-g1",
            "text": "GC overview: generational model, G1 vs ZGC",
            "tier": "Deep"
          },
          {
            "id": "java-core.jvm-memory.gc-tuning-basics-performance-reasoning",
            "text": "GC tuning basics for performance reasoning",
            "tier": "Deep"
          },
          {
            "id": "java-core.jvm-memory.class-loading-classloaders",
            "text": "Class loading, classloaders",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "topicId": "java-core.jvm-memory"
      }
    ],
    "description": "Language fundamentals through JDK 25, closing with just enough JVM/GC for performance reasoning."
  },
  {
    "trackId": "concurrency",
    "title": "Concurrency",
    "category": "Language & Platform",
    "topics": [
      {
        "title": "Threads — fundamentals",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "concurrency.threads-fundamentals.thread-class-runnable-lifecycle",
            "text": "Thread class, Runnable, lifecycle",
            "tier": "Core"
          },
          {
            "id": "concurrency.threads-fundamentals.start-run-join-interrupt",
            "text": "start() vs run(), join, interrupt",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "concurrency.threads-fundamentals"
      },
      {
        "title": "Synchronization",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "concurrency.synchronization.synchronized-intrinsic-locks-monitor",
            "text": "synchronized, intrinsic locks, monitor",
            "tier": "Core"
          },
          {
            "id": "concurrency.synchronization.volatile-and-visibility",
            "text": "volatile and visibility",
            "tier": "Core"
          },
          {
            "id": "concurrency.synchronization.happens-before-java-memory-model",
            "text": "happens-before / Java Memory Model",
            "tier": "Deep"
          },
          {
            "id": "concurrency.synchronization.deadlock-livelock-starvation",
            "text": "Deadlock, livelock, starvation",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "concurrency.synchronization"
      },
      {
        "title": "java.util.concurrent basics",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "concurrency.javautilconcurrent-basics.executorservice-thread-pool-types",
            "text": "ExecutorService, thread pool types",
            "tier": "Core"
          },
          {
            "id": "concurrency.javautilconcurrent-basics.future-callable",
            "text": "Future, Callable",
            "tier": "Core"
          },
          {
            "id": "concurrency.javautilconcurrent-basics.sizing-pools",
            "text": "Sizing pools (CPU-bound vs I/O-bound)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "concurrency.javautilconcurrent-basics"
      },
      {
        "title": "Advanced concurrency",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "concurrency.advanced-concurrency.reentrantlock-readwritelock",
            "text": "ReentrantLock, ReadWriteLock",
            "tier": "Core"
          },
          {
            "id": "concurrency.advanced-concurrency.completablefuture-composition",
            "text": "CompletableFuture composition",
            "tier": "Core"
          },
          {
            "id": "concurrency.advanced-concurrency.concurrenthashmap-internals",
            "text": "ConcurrentHashMap internals",
            "tier": "Deep"
          },
          {
            "id": "concurrency.advanced-concurrency.blockingqueue-producer-consumer",
            "text": "BlockingQueue, producer-consumer",
            "tier": "Core"
          },
          {
            "id": "concurrency.advanced-concurrency.atomic-classes-cas-lock-free",
            "text": "Atomic classes, CAS, lock-free basics",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "concurrency.advanced-concurrency"
      },
      {
        "title": "Virtual Threads (Java 21+, matured in 25)",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "concurrency.virtual-threads.what-they-are-carrier-threads",
            "text": "What they are, carrier threads, mount/unmount",
            "tier": "Core"
          },
          {
            "id": "concurrency.virtual-threads.when-use-platform-threads",
            "text": "When to use vs platform threads",
            "tier": "Core"
          },
          {
            "id": "concurrency.virtual-threads.pinning-post-jep-491-residuals",
            "text": "Pinning: post-JEP 491 residuals (native frames, file I/O)",
            "tier": "Deep"
          },
          {
            "id": "concurrency.virtual-threads.threadlocal-caching-pitfall-under-virtual",
            "text": "ThreadLocal caching pitfall under virtual threads",
            "tier": "Deep"
          },
          {
            "id": "concurrency.virtual-threads.newvirtualthreadpertaskexecutor-migration",
            "text": "newVirtualThreadPerTaskExecutor() migration",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "concurrency.virtual-threads"
      },
      {
        "title": "Structured Concurrency",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "concurrency.structured-concurrency.structuredtaskscope-model",
            "text": "StructuredTaskScope model",
            "tier": "Deep"
          },
          {
            "id": "concurrency.structured-concurrency.scoped-values-as-threadlocal-replacement",
            "text": "Scoped Values as ThreadLocal replacement (JDK 25)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "concurrency.structured-concurrency"
      }
    ],
    "description": "Threads through Virtual Threads — the exact sequencing that broke the old roadmap, fixed for good."
  },
  {
    "trackId": "spring-data",
    "title": "Spring Boot & Data Layer",
    "category": "Frameworks & Data",
    "topics": [
      {
        "title": "Spring core",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "spring-data.spring-core.ioc-container-bean-lifecycle-scopes",
            "text": "IoC container, bean lifecycle, scopes",
            "tier": "Core"
          },
          {
            "id": "spring-data.spring-core.di-styles-configuration-conditional-beans",
            "text": "DI styles, @Configuration, conditional beans",
            "tier": "Core"
          },
          {
            "id": "spring-data.spring-core.aop-proxies",
            "text": "AOP, proxies (why self-invocation breaks)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "spring-data.spring-core"
      },
      {
        "title": "Spring Boot essentials",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "spring-data.spring-boot-essentials.auto-configuration-mechanism",
            "text": "Auto-configuration mechanism",
            "tier": "Core"
          },
          {
            "id": "spring-data.spring-boot-essentials.starters-externalized-config-profiles",
            "text": "Starters, externalized config, profiles",
            "tier": "Core"
          },
          {
            "id": "spring-data.spring-boot-essentials.actuator",
            "text": "Actuator",
            "tier": "Core"
          },
          {
            "id": "spring-data.spring-boot-essentials.spring-boot-4x-changes-3x",
            "text": "Spring Boot 4.x changes vs 3.x",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "spring-data.spring-boot-essentials"
      },
      {
        "title": "Web layer",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "spring-data.web-layer.rest-controllers-validation-exception-handling",
            "text": "REST controllers, validation, exception handling",
            "tier": "Core"
          },
          {
            "id": "spring-data.web-layer.spring-mvc-virtual-threads-default",
            "text": "Spring MVC + virtual threads default",
            "tier": "Deep"
          },
          {
            "id": "spring-data.web-layer.webflux-when-reactive-is-actually",
            "text": "WebFlux — when reactive is actually right",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "spring-data.web-layer"
      },
      {
        "title": "Persistence & JPA",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "spring-data.persistence-jpa.entity-mapping-relationships",
            "text": "Entity mapping, relationships",
            "tier": "Core"
          },
          {
            "id": "spring-data.persistence-jpa.lazy-eager-n1-problem-fixes",
            "text": "Lazy vs eager, N+1 problem and fixes",
            "tier": "Core"
          },
          {
            "id": "spring-data.persistence-jpa.first-second-level-cache",
            "text": "First/second-level cache",
            "tier": "Deep"
          },
          {
            "id": "spring-data.persistence-jpa.common-hibernate-pitfalls",
            "text": "Common Hibernate pitfalls (LazyInit, open-session-in-view)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "spring-data.persistence-jpa"
      },
      {
        "title": "SQL & data modeling",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "spring-data.sql-data-modeling.indexing-b-tree-composite-covering",
            "text": "Indexing: B-tree, composite, covering indexes",
            "tier": "Core"
          },
          {
            "id": "spring-data.sql-data-modeling.reading-query-plan-explain",
            "text": "Reading a query plan / EXPLAIN",
            "tier": "Deep"
          },
          {
            "id": "spring-data.sql-data-modeling.transactions-acid-isolation-levels-anomalies",
            "text": "Transactions: ACID, isolation levels, anomalies",
            "tier": "Core"
          },
          {
            "id": "spring-data.sql-data-modeling.locking-optimistic-vs-pessimistic",
            "text": "Locking: optimistic vs pessimistic",
            "tier": "Deep"
          },
          {
            "id": "spring-data.sql-data-modeling.normalization-vs-denormalization-tradeoffs",
            "text": "Normalization vs denormalization tradeoffs",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "spring-data.sql-data-modeling"
      },
      {
        "title": "NoSQL selection",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "spring-data.nosql-selection.when-reach-document-kv-wide",
            "text": "When to reach for document / KV / wide-column",
            "tier": "Core"
          },
          {
            "id": "spring-data.nosql-selection.picking-one-knowing-it-well",
            "text": "Picking one and knowing it well",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "spring-data.nosql-selection"
      }
    ],
    "description": "Spring Boot plus the JPA, SQL, and transaction semantics that ride with it."
  },
  {
    "trackId": "apis-messaging",
    "title": "APIs, Messaging & Distributed Systems",
    "category": "Systems & Architecture",
    "topics": [
      {
        "title": "API design",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "apis-messaging.api-design.rest-maturity-resource-modeling-status",
            "text": "REST maturity, resource modeling, status codes",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.api-design.pagination-filtering-versioning",
            "text": "Pagination, filtering, versioning",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.api-design.idempotency-keys",
            "text": "Idempotency keys",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.api-design.grpc-when-and-why",
            "text": "gRPC — when and why",
            "tier": "Deep"
          },
          {
            "id": "apis-messaging.api-design.graphql-tradeoffs-n1-at-resolver",
            "text": "GraphQL — tradeoffs, N+1 at the resolver",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "apis-messaging.api-design"
      },
      {
        "title": "Messaging & events",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "apis-messaging.messaging-events.queue-pub-sub-semantics",
            "text": "Queue vs pub/sub semantics",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.messaging-events.kafka-topics-partitions-consumer-groups",
            "text": "Kafka: topics, partitions, consumer groups, offsets",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.messaging-events.delivery-guarantees-at-least-at",
            "text": "Delivery guarantees: at-least/at-most/exactly-once",
            "tier": "Deep"
          },
          {
            "id": "apis-messaging.messaging-events.ordering-and-idempotent-consumers",
            "text": "Ordering and idempotent consumers",
            "tier": "Deep"
          },
          {
            "id": "apis-messaging.messaging-events.outbox-pattern",
            "text": "Outbox pattern",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "apis-messaging.messaging-events"
      },
      {
        "title": "Resilience patterns",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "apis-messaging.resilience-patterns.timeouts-retries-with-backoff-jitter",
            "text": "Timeouts, retries with backoff, jitter",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.resilience-patterns.circuit-breaker-bulkhead",
            "text": "Circuit breaker, bulkhead",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.resilience-patterns.rate-limiting-throttling",
            "text": "Rate limiting / throttling",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "apis-messaging.resilience-patterns"
      },
      {
        "title": "Distributed systems fundamentals",
        "tiers": [
          "Core",
          "Deep",
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "apis-messaging.distributed-systems-fundamentals.cap-pacelc",
            "text": "CAP, PACELC",
            "tier": "Core"
          },
          {
            "id": "apis-messaging.distributed-systems-fundamentals.consistency-models",
            "text": "Consistency models (strong, eventual, causal)",
            "tier": "Deep"
          },
          {
            "id": "apis-messaging.distributed-systems-fundamentals.consensus-intuition",
            "text": "Consensus intuition (Raft at a high level)",
            "tier": "Stretch"
          },
          {
            "id": "apis-messaging.distributed-systems-fundamentals.distributed-transactions-2pc-saga",
            "text": "Distributed transactions: 2PC vs Saga",
            "tier": "Deep"
          },
          {
            "id": "apis-messaging.distributed-systems-fundamentals.cqrs-event-sourcing-when-justified",
            "text": "CQRS + event sourcing — when justified",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "apis-messaging.distributed-systems-fundamentals"
      }
    ],
    "description": "API design, messaging, and the distributed-systems patterns senior loops probe."
  },
  {
    "trackId": "cloud-k8s",
    "title": "Cloud, Kubernetes & Production Ops",
    "category": "Systems & Architecture",
    "topics": [
      {
        "title": "Containers",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "cloud-k8s.containers.docker-images-layers-multi-stage",
            "text": "Docker images, layers, multi-stage builds",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.containers.image-slimming-distroless-security-scanning",
            "text": "Image slimming, distroless, security scanning",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "cloud-k8s.containers"
      },
      {
        "title": "Kubernetes core",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "cloud-k8s.kubernetes-core.pods-deployments-services-ingress",
            "text": "Pods, Deployments, Services, Ingress",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.kubernetes-core.configmaps-secrets",
            "text": "ConfigMaps, Secrets",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.kubernetes-core.health-probes",
            "text": "Health probes (liveness/readiness/startup)",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.kubernetes-core.resource-requests-limits-autoscaling",
            "text": "Resource requests/limits, autoscaling (HPA)",
            "tier": "Deep"
          },
          {
            "id": "cloud-k8s.kubernetes-core.rolling-deployments-rollbacks",
            "text": "Rolling deployments, rollbacks",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.kubernetes-core.networking-model-service-discovery",
            "text": "Networking model, service discovery",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "cloud-k8s.kubernetes-core"
      },
      {
        "title": "OpenShift specifics",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "cloud-k8s.openshift-specifics.routes-buildconfigs-source-image",
            "text": "Routes, BuildConfigs, Source-to-Image",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.openshift-specifics.scc",
            "text": "SCC (Security Context Constraints)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "cloud-k8s.openshift-specifics"
      },
      {
        "title": "One cloud provider deep",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "cloud-k8s.one-cloud-provider-deep.compute-managed-db-object-storage",
            "text": "Compute, managed DB, object storage, IAM basics",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.one-cloud-provider-deep.managed-k8s",
            "text": "Managed K8s (EKS/GKE/AKS)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "cloud-k8s.one-cloud-provider-deep"
      },
      {
        "title": "Observability & production readiness",
        "tiers": [
          "Core",
          "Deep",
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "cloud-k8s.observability-production-readiness.metrics-prometheus",
            "text": "Metrics (RED/USE), Prometheus",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.observability-production-readiness.structured-logging-correlation-ids",
            "text": "Structured logging, correlation IDs",
            "tier": "Core"
          },
          {
            "id": "cloud-k8s.observability-production-readiness.distributed-tracing-opentelemetry",
            "text": "Distributed tracing, OpenTelemetry",
            "tier": "Deep"
          },
          {
            "id": "cloud-k8s.observability-production-readiness.slis-slos-error-budgets",
            "text": "SLIs / SLOs / error budgets",
            "tier": "Deep"
          },
          {
            "id": "cloud-k8s.observability-production-readiness.incident-response-on-call-fundamentals",
            "text": "Incident response, on-call fundamentals",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "topicId": "cloud-k8s.observability-production-readiness"
      }
    ],
    "description": "Containers through Kubernetes, OpenShift, and the observability that keeps production honest."
  },
  {
    "trackId": "security",
    "title": "Security",
    "category": "Systems & Architecture",
    "topics": [
      {
        "title": "AuthN vs AuthZ foundations",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "security.authn-vs-authz-foundations.authentication-authorization-distinction-where-each",
            "text": "Authentication vs authorization — the distinction and where each lives in a request",
            "tier": "Core"
          },
          {
            "id": "security.authn-vs-authz-foundations.sessions-tokens-stateful-stateless-tradeoffs",
            "text": "Sessions vs tokens; stateful vs stateless tradeoffs",
            "tier": "Core"
          },
          {
            "id": "security.authn-vs-authz-foundations.password-handling-done-right-bcrypt",
            "text": "Password handling done right — bcrypt/argon2, salting, never rolling your own",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "security.authn-vs-authz-foundations"
      },
      {
        "title": "OAuth 2.0 & OIDC",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "security.oauth-20-oidc.roles-resource-owner-client-authorization",
            "text": "The roles: resource owner, client, authorization server, resource server",
            "tier": "Core"
          },
          {
            "id": "security.oauth-20-oidc.grant-flows-authorization-code-pkce",
            "text": "Grant flows — Authorization Code + PKCE as the modern default, Client Credentials for service-to-service",
            "tier": "Core"
          },
          {
            "id": "security.oauth-20-oidc.why-implicit-password-grants-are",
            "text": "Why Implicit and Password grants are deprecated",
            "tier": "Core"
          },
          {
            "id": "security.oauth-20-oidc.oidc-as-identity-layer-on",
            "text": "OIDC as the identity layer on top of OAuth2 (ID token vs access token)",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "security.oauth-20-oidc"
      },
      {
        "title": "JWT in depth",
        "tiers": [
          "Core",
          "Deep"
        ],
        "subtasks": [
          {
            "id": "security.jwt-in-depth.structure-signing-vs-encryption",
            "text": "Structure (header/payload/signature); signing vs encryption",
            "tier": "Core"
          },
          {
            "id": "security.jwt-in-depth.validation-done-correctly-signature-issuer",
            "text": "Validation done correctly — signature, issuer, audience, expiry; the alg:none attack",
            "tier": "Core"
          },
          {
            "id": "security.jwt-in-depth.access-refresh-tokens-rotation-revocation",
            "text": "Access vs refresh tokens; rotation and revocation strategies",
            "tier": "Core"
          },
          {
            "id": "security.jwt-in-depth.stateless-token-tradeoff-you-cant",
            "text": "Stateless-token tradeoff — you can't easily revoke; the mitigations",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "security.jwt-in-depth"
      },
      {
        "title": "Spring Security",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "security.spring-security.filter-chain-mental-model-that",
            "text": "The filter chain — the mental model that makes everything else make sense",
            "tier": "Core"
          },
          {
            "id": "security.spring-security.configuring-resource-server-jwt-validation",
            "text": "Configuring resource-server JWT validation",
            "tier": "Core"
          },
          {
            "id": "security.spring-security.method-level-security-expression-based",
            "text": "Method-level security (@PreAuthorize) and expression-based access",
            "tier": "Core"
          },
          {
            "id": "security.spring-security.cors-csrf-what-they-defend",
            "text": "CORS and CSRF — what they defend, when CSRF protection is/isn't needed",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "security.spring-security"
      },
      {
        "title": "OWASP Top 10",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "security.owasp-top-10.injection-parameterized-queries-as-fix",
            "text": "Injection (SQL and beyond) — parameterized queries as the fix",
            "tier": "Core"
          },
          {
            "id": "security.owasp-top-10.broken-access-control-idor-missing",
            "text": "Broken access control (current #1) — IDOR, missing function-level checks",
            "tier": "Core"
          },
          {
            "id": "security.owasp-top-10.cryptographic-failures-security-misconfiguration",
            "text": "Cryptographic failures, security misconfiguration",
            "tier": "Core"
          },
          {
            "id": "security.owasp-top-10.ssrf-why-it-matters-more",
            "text": "SSRF, and why it matters more in cloud environments",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "security.owasp-top-10"
      },
      {
        "title": "Secrets management",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "security.secrets-management.why-secrets-never-live-code",
            "text": "Why secrets never live in code or images",
            "tier": "Deep"
          },
          {
            "id": "security.secrets-management.vault-cloud-secret-managers-secret",
            "text": "Vault / cloud secret managers; secret rotation",
            "tier": "Deep"
          },
          {
            "id": "security.secrets-management.environment-level-injection-risks",
            "text": "Environment-level injection and the risks",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "security.secrets-management"
      },
      {
        "title": "Transport & data security",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "security.transport-data-security.tls-what-it-guarantees-cert",
            "text": "TLS — what it guarantees, cert validation, mTLS for service-to-service",
            "tier": "Deep"
          },
          {
            "id": "security.transport-data-security.encryption-at-rest-transit",
            "text": "Encryption at rest vs in transit",
            "tier": "Deep"
          },
          {
            "id": "security.transport-data-security.pii-handling-data-minimization-compliance",
            "text": "PII handling, data minimization, compliance backdrop (GDPR-style reasoning)",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "security.transport-data-security"
      },
      {
        "title": "API & application hardening",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "security.api-application-hardening.input-validation-output-encoding-as",
            "text": "Input validation and output encoding as distinct defenses",
            "tier": "Deep"
          },
          {
            "id": "security.api-application-hardening.rate-limiting-as-security-control",
            "text": "Rate limiting as a security control",
            "tier": "Deep"
          },
          {
            "id": "security.api-application-hardening.dependency-supply-chain-risk-cve",
            "text": "Dependency/supply-chain risk — CVE scanning, pinned versions",
            "tier": "Deep"
          },
          {
            "id": "security.api-application-hardening.security-headers",
            "text": "Security headers",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "security.api-application-hardening"
      },
      {
        "title": "Threat modeling",
        "tiers": [
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "security.threat-modeling.stride-as-lightweight-framework",
            "text": "STRIDE as a lightweight framework",
            "tier": "Stretch"
          },
          {
            "id": "security.threat-modeling.attack-surface-reasoning-trust-boundaries",
            "text": "Attack surface reasoning; trust boundaries",
            "tier": "Stretch"
          },
          {
            "id": "security.threat-modeling.thinking-like-attacker-design-review",
            "text": "Thinking like an attacker in a design review",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "topicId": "security.threat-modeling"
      }
    ],
    "description": "Auth, identity, and the threat landscape a senior backend engineer reasons about fluently."
  },
  {
    "trackId": "llm-integration",
    "title": "LLM Integration for Backend",
    "category": "Emerging",
    "topics": [
      {
        "title": "LLM fundamentals for engineers",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "llm-integration.llm-fundamentals-for-engineers.tokens-context-windows-why-they",
            "text": "Tokens, context windows, and why they bound everything",
            "tier": "Core"
          },
          {
            "id": "llm-integration.llm-fundamentals-for-engineers.temperature-sampling-knobs-determinism-creativity",
            "text": "Temperature and the sampling knobs; determinism vs creativity",
            "tier": "Core"
          },
          {
            "id": "llm-integration.llm-fundamentals-for-engineers.embeddings-what-vector-represents-cosine",
            "text": "Embeddings — what a vector represents, cosine similarity",
            "tier": "Core"
          },
          {
            "id": "llm-integration.llm-fundamentals-for-engineers.cost-latency-as-first-class",
            "text": "Cost and latency as first-class design constraints",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "llm-integration.llm-fundamentals-for-engineers"
      },
      {
        "title": "Calling models from a backend",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "llm-integration.calling-models-from-backend.spring-ai-chatclient-abstraction-over",
            "text": "Spring AI ChatClient — the abstraction over providers",
            "tier": "Core"
          },
          {
            "id": "llm-integration.calling-models-from-backend.prompt-templating-message-roles",
            "text": "Prompt templating and message roles (system/user/assistant)",
            "tier": "Core"
          },
          {
            "id": "llm-integration.calling-models-from-backend.structured-outputs-mapping-model-responses",
            "text": "Structured outputs — mapping model responses to typed Java objects",
            "tier": "Core"
          },
          {
            "id": "llm-integration.calling-models-from-backend.streaming-responses-handling-partial-output",
            "text": "Streaming responses; handling partial output",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "llm-integration.calling-models-from-backend"
      },
      {
        "title": "Prompt engineering as an API contract",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "llm-integration.prompt-engineering-as-api-contract.system-prompts-role-design",
            "text": "System prompts and role design",
            "tier": "Core"
          },
          {
            "id": "llm-integration.prompt-engineering-as-api-contract.few-shot-examples-when-they",
            "text": "Few-shot examples; when they earn their token cost",
            "tier": "Core"
          },
          {
            "id": "llm-integration.prompt-engineering-as-api-contract.output-constraints-formatting-reliable-parsing",
            "text": "Output constraints and formatting for reliable parsing",
            "tier": "Core"
          },
          {
            "id": "llm-integration.prompt-engineering-as-api-contract.prompt-injection-as-security-concern",
            "text": "Prompt injection as a security concern",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "llm-integration.prompt-engineering-as-api-contract"
      },
      {
        "title": "Retrieval-Augmented Generation (RAG)",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "llm-integration.retrieval-augmented-generation.rag-pipeline-end-end-ingest",
            "text": "The RAG pipeline end to end: ingest, chunk, embed, store, retrieve, augment, generate",
            "tier": "Core"
          },
          {
            "id": "llm-integration.retrieval-augmented-generation.chunking-strategies-why-chunk-size",
            "text": "Chunking strategies and why chunk size/overlap changes answer quality",
            "tier": "Core"
          },
          {
            "id": "llm-integration.retrieval-augmented-generation.embedding-models-choosing-one-dimensionality",
            "text": "Embedding models — choosing one, dimensionality, cost",
            "tier": "Core"
          },
          {
            "id": "llm-integration.retrieval-augmented-generation.grounding-citation-tying-answers-back",
            "text": "Grounding and citation — tying answers back to source documents",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "llm-integration.retrieval-augmented-generation"
      },
      {
        "title": "Vector stores",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "llm-integration.vector-stores.what-vector-database-does-ann",
            "text": "What a vector database does; ANN search intuition (HNSW at a high level)",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.vector-stores.pgvector-vectors-inside-postgres-pragmatic",
            "text": "pgvector — vectors inside Postgres, the pragmatic default for a Spring shop",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.vector-stores.dedicated-stores-when-scale-justifies",
            "text": "Dedicated stores (Qdrant, Pinecone, Milvus) — when scale justifies one",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.vector-stores.metadata-filtering-alongside-vector-search",
            "text": "Metadata filtering alongside vector search",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "llm-integration.vector-stores"
      },
      {
        "title": "Retrieval quality",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "llm-integration.retrieval-quality.hybrid-search-combining-semantic-with",
            "text": "Hybrid search — combining semantic (vector) with keyword (BM25)",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.retrieval-quality.reranking-retrieved-results",
            "text": "Reranking retrieved results",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.retrieval-quality.recall-precision-retrieval-p99-latency",
            "text": "Recall vs precision in retrieval; p99 latency and freshness",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.retrieval-quality.why-model-gave-bad-answer",
            "text": "Why \"the model gave a bad answer\" is usually a retrieval problem",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "llm-integration.retrieval-quality"
      },
      {
        "title": "Tool calling & agents",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "llm-integration.tool-calling-agents.function-tool-calling-letting-model",
            "text": "Function/tool calling — letting the model invoke your backend methods",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.tool-calling-agents.agent-loop-at-practical-level",
            "text": "The agent loop (plan, act, observe) at a practical level",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.tool-calling-agents.spring-ai-tool-integration",
            "text": "Spring AI tool integration",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.tool-calling-agents.guardrails-on-what-agent-is",
            "text": "Guardrails on what an agent is allowed to do",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "llm-integration.tool-calling-agents"
      },
      {
        "title": "Evaluation & observability for LLM features",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "llm-integration.evaluation-observability-llm-features.why-llm-output-cant-be",
            "text": "Why LLM output can't be tested like deterministic code",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.evaluation-observability-llm-features.eval-approaches-golden-sets-llm",
            "text": "Eval approaches — golden sets, LLM-as-judge, human review loops",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.evaluation-observability-llm-features.tracing-token-usage-cost-latency",
            "text": "Tracing token usage, cost, and latency in production",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.evaluation-observability-llm-features.regression-detection-when-you-change",
            "text": "Regression detection when you change a prompt or model",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "llm-integration.evaluation-observability-llm-features"
      },
      {
        "title": "Production concerns",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "llm-integration.production-concerns.caching-fallbacks-when-provider-is",
            "text": "Caching (semantic caching), fallbacks when the provider is down",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.production-concerns.rate-limits-retries-cost-controls",
            "text": "Rate limits, retries, and cost controls at the API boundary",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.production-concerns.hallucination-mitigation-setting-user-expectations",
            "text": "Hallucination mitigation and setting user expectations",
            "tier": "Deep"
          },
          {
            "id": "llm-integration.production-concerns.data-privacy-what-you-send",
            "text": "Data privacy — what you send to a third-party model, PII redaction",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "llm-integration.production-concerns"
      },
      {
        "title": "AI-era system design prep",
        "tiers": [
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "llm-integration.ai-era-system-design-prep.designing-llm-backed-feature-end",
            "text": "Designing an LLM-backed feature end to end as an interview answer",
            "tier": "Stretch"
          },
          {
            "id": "llm-integration.ai-era-system-design-prep.tradeoffs-interviewers-now-probe-cost",
            "text": "The tradeoffs interviewers now probe: cost, latency, accuracy, privacy",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "topicId": "llm-integration.ai-era-system-design-prep"
      }
    ],
    "description": "Backend AI the Java-native way — Spring AI, RAG, and concepts defensible under questioning."
  },
  {
    "trackId": "dsa",
    "title": "DSA & Coding",
    "category": "Interview Craft",
    "topics": [
      {
        "title": "Arrays & Hashing",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.arrays-hashing.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.arrays-hashing.code-the-template-cold",
            "text": "Code the template cold (LC 1, LC 217, LC 242, LC 49)",
            "tier": "Core"
          },
          {
            "id": "dsa.arrays-hashing.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.arrays-hashing.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          1,
          217,
          242,
          49
        ],
        "topicId": "dsa.arrays-hashing"
      },
      {
        "title": "Two Pointers",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.two-pointers.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.two-pointers.code-the-template-cold",
            "text": "Code the template cold (LC 125, LC 167, LC 15, LC 11)",
            "tier": "Core"
          },
          {
            "id": "dsa.two-pointers.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.two-pointers.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          125,
          167,
          15,
          11
        ],
        "topicId": "dsa.two-pointers"
      },
      {
        "title": "Sliding Window",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.sliding-window.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.sliding-window.code-the-template-cold",
            "text": "Code the template cold (LC 121, LC 3, LC 424, LC 76)",
            "tier": "Core"
          },
          {
            "id": "dsa.sliding-window.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.sliding-window.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          121,
          3,
          424,
          76
        ],
        "topicId": "dsa.sliding-window"
      },
      {
        "title": "Stack",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.stack.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.stack.code-the-template-cold",
            "text": "Code the template cold (LC 20, LC 155, LC 739, LC 84)",
            "tier": "Core"
          },
          {
            "id": "dsa.stack.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.stack.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          20,
          155,
          739,
          84
        ],
        "topicId": "dsa.stack"
      },
      {
        "title": "Binary Search",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.binary-search.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.binary-search.code-the-template-cold",
            "text": "Code the template cold (LC 704, LC 153, LC 33, LC 4)",
            "tier": "Core"
          },
          {
            "id": "dsa.binary-search.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.binary-search.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          704,
          153,
          33,
          4
        ],
        "topicId": "dsa.binary-search"
      },
      {
        "title": "Linked List",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.linked-list.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.linked-list.code-the-template-cold",
            "text": "Code the template cold (LC 206, LC 21, LC 141, LC 23)",
            "tier": "Core"
          },
          {
            "id": "dsa.linked-list.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.linked-list.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          206,
          21,
          141,
          23
        ],
        "topicId": "dsa.linked-list"
      },
      {
        "title": "Trees (BFS/DFS)",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.trees.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.trees.code-the-template-cold",
            "text": "Code the template cold (LC 226, LC 104, LC 102, LC 124)",
            "tier": "Core"
          },
          {
            "id": "dsa.trees.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.trees.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          226,
          104,
          102,
          124
        ],
        "topicId": "dsa.trees"
      },
      {
        "title": "Binary Search Trees",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.binary-search-trees.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.binary-search-trees.code-the-template-cold",
            "text": "Code the template cold (LC 700, LC 98, LC 230, LC 235)",
            "tier": "Core"
          },
          {
            "id": "dsa.binary-search-trees.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.binary-search-trees.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          700,
          98,
          230,
          235
        ],
        "topicId": "dsa.binary-search-trees"
      },
      {
        "title": "Tries",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "dsa.tries.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Deep"
          },
          {
            "id": "dsa.tries.code-the-template-cold",
            "text": "Code the template cold (LC 208, LC 211, LC 212)",
            "tier": "Deep"
          },
          {
            "id": "dsa.tries.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Deep"
          },
          {
            "id": "dsa.tries.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Deep"
          }
        ],
        "link": null,
        "leetcode": [
          208,
          211,
          212
        ],
        "topicId": "dsa.tries"
      },
      {
        "title": "Heaps / Priority Queue",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.heaps-priority-queue.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.heaps-priority-queue.code-the-template-cold",
            "text": "Code the template cold (LC 703, LC 1046, LC 973, LC 295)",
            "tier": "Core"
          },
          {
            "id": "dsa.heaps-priority-queue.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.heaps-priority-queue.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          703,
          1046,
          973,
          295
        ],
        "topicId": "dsa.heaps-priority-queue"
      },
      {
        "title": "Backtracking",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "dsa.backtracking.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Deep"
          },
          {
            "id": "dsa.backtracking.code-the-template-cold",
            "text": "Code the template cold (LC 78, LC 39, LC 46, LC 51)",
            "tier": "Deep"
          },
          {
            "id": "dsa.backtracking.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Deep"
          },
          {
            "id": "dsa.backtracking.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Deep"
          }
        ],
        "link": null,
        "leetcode": [
          78,
          39,
          46,
          51
        ],
        "topicId": "dsa.backtracking"
      },
      {
        "title": "Graphs (BFS/DFS)",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.graphs.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.graphs.code-the-template-cold",
            "text": "Code the template cold (LC 200, LC 133, LC 207, LC 417)",
            "tier": "Core"
          },
          {
            "id": "dsa.graphs.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.graphs.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          200,
          133,
          207,
          417
        ],
        "topicId": "dsa.graphs"
      },
      {
        "title": "Advanced Graphs (Dijkstra/Union-Find)",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "dsa.advanced-graphs.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Deep"
          },
          {
            "id": "dsa.advanced-graphs.code-the-template-cold",
            "text": "Code the template cold (LC 743, LC 787, LC 684)",
            "tier": "Deep"
          },
          {
            "id": "dsa.advanced-graphs.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Deep"
          },
          {
            "id": "dsa.advanced-graphs.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Deep"
          }
        ],
        "link": null,
        "leetcode": [
          743,
          787,
          684
        ],
        "topicId": "dsa.advanced-graphs"
      },
      {
        "title": "Dynamic Programming 1-D",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "dsa.dynamic-programming-1-d.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Deep"
          },
          {
            "id": "dsa.dynamic-programming-1-d.code-the-template-cold",
            "text": "Code the template cold (LC 70, LC 198, LC 322, LC 300)",
            "tier": "Deep"
          },
          {
            "id": "dsa.dynamic-programming-1-d.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Deep"
          },
          {
            "id": "dsa.dynamic-programming-1-d.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Deep"
          }
        ],
        "link": null,
        "leetcode": [
          70,
          198,
          322,
          300
        ],
        "topicId": "dsa.dynamic-programming-1-d"
      },
      {
        "title": "Dynamic Programming 2-D",
        "tiers": [
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "dsa.dynamic-programming-2-d.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Stretch"
          },
          {
            "id": "dsa.dynamic-programming-2-d.code-the-template-cold",
            "text": "Code the template cold (LC 62, LC 1143, LC 309, LC 72)",
            "tier": "Stretch"
          },
          {
            "id": "dsa.dynamic-programming-2-d.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Stretch"
          },
          {
            "id": "dsa.dynamic-programming-2-d.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "leetcode": [
          62,
          1143,
          309,
          72
        ],
        "topicId": "dsa.dynamic-programming-2-d"
      },
      {
        "title": "Intervals",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "dsa.intervals.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Core"
          },
          {
            "id": "dsa.intervals.code-the-template-cold",
            "text": "Code the template cold (LC 57, LC 56, LC 435, LC 253)",
            "tier": "Core"
          },
          {
            "id": "dsa.intervals.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Core"
          },
          {
            "id": "dsa.intervals.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Core"
          }
        ],
        "link": null,
        "leetcode": [
          57,
          56,
          435,
          253
        ],
        "topicId": "dsa.intervals"
      },
      {
        "title": "Greedy",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "dsa.greedy.recognize-trigger-this-pattern",
            "text": "Recognize the trigger for this pattern",
            "tier": "Deep"
          },
          {
            "id": "dsa.greedy.code-the-template-cold",
            "text": "Code the template cold (LC 53, LC 55, LC 45, LC 134)",
            "tier": "Deep"
          },
          {
            "id": "dsa.greedy.narrate-approach-out-loud",
            "text": "Narrate the approach out loud",
            "tier": "Deep"
          },
          {
            "id": "dsa.greedy.handle-one-follow-up-variant",
            "text": "Handle one follow-up / variant",
            "tier": "Deep"
          }
        ],
        "link": null,
        "leetcode": [
          53,
          55,
          45,
          134
        ],
        "topicId": "dsa.greedy"
      },
      {
        "title": "AI-enabled coding round",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "dsa.ai-enabled-coding-round.working-multi-file-problem-with",
            "text": "Working a multi-file problem with a model in the editor",
            "tier": "Deep"
          },
          {
            "id": "dsa.ai-enabled-coding-round.prompting-deliberately-then-verifying-debugging",
            "text": "Prompting deliberately, then verifying/debugging generated code",
            "tier": "Deep"
          },
          {
            "id": "dsa.ai-enabled-coding-round.narrating-why-you-accepted-or",
            "text": "Narrating why you accepted or rejected a suggestion",
            "tier": "Deep"
          },
          {
            "id": "dsa.ai-enabled-coding-round.practice-via-hellointerview-ai-enabled",
            "text": "Practice via HelloInterview AI-Enabled Coding",
            "tier": "Deep"
          }
        ],
        "link": "https://www.hellointerview.com/practice/overview",
        "topicId": "dsa.ai-enabled-coding-round"
      }
    ],
    "description": "Seventeen patterns, four problems each — recognize, code cold, narrate, handle the follow-up."
  },
  {
    "trackId": "system-design",
    "title": "System Design",
    "category": "Interview Craft",
    "topics": [
      {
        "title": "Core Concepts",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "system-design.core-concepts.scaling-cap-consistency-caching-partitioning",
            "text": "Scaling, CAP, consistency, caching, partitioning, replication",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/system-design/in-a-hurry/core-concepts",
        "topicId": "system-design.core-concepts"
      },
      {
        "title": "Key Technologies",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "system-design.key-technologies.db-choice-cache-queue-blob",
            "text": "DB choice, cache, queue, blob store, search, CDN — pick one per category and know it",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/system-design/in-a-hurry/key-technologies",
        "topicId": "system-design.key-technologies"
      },
      {
        "title": "API design in SD context",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "system-design.api-design-sd-context.applying-rest-idempotency-pagination-decisions",
            "text": "Applying REST/idempotency/pagination decisions inside a system design answer",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/system-design/core-concepts/api-design",
        "topicId": "system-design.api-design-sd-context"
      },
      {
        "title": "Patterns",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "system-design.patterns.recurring-sd-patterns-sharding-load",
            "text": "Recurring SD patterns: sharding, load balancing, caching strategies, message queues",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/system-design/in-a-hurry/patterns",
        "topicId": "system-design.patterns"
      },
      {
        "title": "Problem Breakdowns",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "system-design.problem-breakdowns.product-design-flavor-problems",
            "text": "Product-design flavor problems (practice 8-10 across product + infra)",
            "tier": "Core"
          },
          {
            "id": "system-design.problem-breakdowns.infrastructure-design-flavor-problems",
            "text": "Infrastructure-design flavor problems",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/system-design",
        "topicId": "system-design.problem-breakdowns"
      },
      {
        "title": "Delivery under time pressure",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "system-design.delivery-under-time-pressure.full-mock-system-design-attempts",
            "text": "Full mock system design attempts under time pressure, AI-graded",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/practice/system-design",
        "topicId": "system-design.delivery-under-time-pressure"
      },
      {
        "title": "Cost & operations reasoning",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "system-design.cost-operations-reasoning.reasoning-about-cost-tradeoffs-operational",
            "text": "Reasoning about cost tradeoffs and operational burden as part of the design answer — now graded explicitly",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "system-design.cost-operations-reasoning"
      },
      {
        "title": "AI/ML system design (market gap)",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "system-design.ai-ml-system-design.designing-llm-serving-rag-system",
            "text": "Designing an LLM serving/RAG system end-to-end",
            "tier": "Deep"
          },
          {
            "id": "system-design.ai-ml-system-design.ml-pipeline-components-feature-stores",
            "text": "ML pipeline components, feature stores, model serving",
            "tier": "Deep"
          },
          {
            "id": "system-design.ai-ml-system-design.design-chatgpts-serving-layer-class",
            "text": "\"Design ChatGPT's serving layer\" class of questions",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "system-design.ai-ml-system-design"
      }
    ],
    "description": "HelloInterview's framework as backbone, plus the AI/ML system design gap the market opened."
  },
  {
    "trackId": "lld",
    "title": "Low-Level Design",
    "category": "Interview Craft",
    "topics": [
      {
        "title": "Delivery Framework",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "lld.delivery-framework.35-min-flow-clarify-object",
            "text": "~35 min flow: clarify, object model, class APIs, core logic",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/low-level-design/in-a-hurry/delivery",
        "topicId": "lld.delivery-framework"
      },
      {
        "title": "Design Principles",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "lld.design-principles.solid-dry-composition-over-inheritance",
            "text": "SOLID, DRY, composition over inheritance",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/low-level-design/in-a-hurry/design-principles",
        "topicId": "lld.design-principles"
      },
      {
        "title": "OOP Concepts",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "lld.oop-concepts.core-oop-concepts-as-applied",
            "text": "Core OOP concepts as applied inside an LLD interview answer",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/low-level-design/in-a-hurry/oop-concepts",
        "topicId": "lld.oop-concepts"
      },
      {
        "title": "Design Patterns",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "lld.design-patterns.strategy-factory-observer-state-singleton",
            "text": "Strategy, Factory, Observer, State, Singleton, Builder — be ready to name them (India-market weighting)",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/low-level-design/in-a-hurry/patterns",
        "topicId": "lld.design-patterns"
      },
      {
        "title": "Problem Breakdowns",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "lld.problem-breakdowns.parking-lot-elevator-connect-four",
            "text": "Parking lot, elevator, Connect Four, rate limiter, etc.",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/connect-four",
        "topicId": "lld.problem-breakdowns"
      },
      {
        "title": "Concurrency in LLD",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "lld.concurrency-in-lld.thread-safety-designed-object-model",
            "text": "Thread-safety in a designed object model",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "lld.concurrency-in-lld"
      },
      {
        "title": "Guided Practice",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "lld.guided-practice.timed-lld-attempts-with-ai",
            "text": "Timed LLD attempts with AI grading",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/practice/low-level-design",
        "topicId": "lld.guided-practice"
      }
    ],
    "description": "Object-oriented design under time pressure — patterns named explicitly, pseudocode as the expected medium."
  },
  {
    "trackId": "behavioral",
    "title": "Behavioral",
    "category": "Interview Craft",
    "topics": [
      {
        "title": "Story inventory (STAR)",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "behavioral.story-inventory.draft-a-conflict-story",
            "text": "Draft a conflict story",
            "tier": "Core"
          },
          {
            "id": "behavioral.story-inventory.draft-a-failure-story",
            "text": "Draft a failure story",
            "tier": "Core"
          },
          {
            "id": "behavioral.story-inventory.draft-a-leadership-story",
            "text": "Draft a leadership story",
            "tier": "Core"
          },
          {
            "id": "behavioral.story-inventory.draft-an-ambiguity-story",
            "text": "Draft an ambiguity story",
            "tier": "Core"
          },
          {
            "id": "behavioral.story-inventory.draft-an-impact-story",
            "text": "Draft an impact story",
            "tier": "Core"
          },
          {
            "id": "behavioral.story-inventory.draft-disagreement-with-manager-story",
            "text": "Draft a disagreement-with-manager story",
            "tier": "Core"
          },
          {
            "id": "behavioral.story-inventory.draft-a-mentorship-story",
            "text": "Draft a mentorship story",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "behavioral.story-inventory"
      },
      {
        "title": "Leadership-principle / value mapping",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "behavioral.leadership-principle-value-mapping.map-each-story-common-principle",
            "text": "Map each story to common principle sets (Amazon LPs etc.)",
            "tier": "Core"
          }
        ],
        "link": null,
        "topicId": "behavioral.leadership-principle-value-mapping"
      },
      {
        "title": "Staff-level signals",
        "tiers": [
          "Deep"
        ],
        "subtasks": [
          {
            "id": "behavioral.staff-level-signals.scope-influence-without-authority-cross",
            "text": "Scope, influence-without-authority, cross-team impact stories",
            "tier": "Deep"
          }
        ],
        "link": null,
        "topicId": "behavioral.staff-level-signals"
      },
      {
        "title": "Delivery practice",
        "tiers": [
          "Core"
        ],
        "subtasks": [
          {
            "id": "behavioral.delivery-practice.tighten-each-story-2-3",
            "text": "Tighten each story to 2-3 min, land the result/metric, handle probing follow-ups",
            "tier": "Core"
          }
        ],
        "link": "https://www.hellointerview.com/practice/overview",
        "topicId": "behavioral.delivery-practice"
      },
      {
        "title": "Questions-for-interviewer bank",
        "tiers": [
          "Stretch"
        ],
        "subtasks": [
          {
            "id": "behavioral.questions-for-interviewer-bank.prepare-bank-genuine-questions-ask",
            "text": "Prepare a bank of genuine questions to ask interviewers",
            "tier": "Stretch"
          }
        ],
        "link": null,
        "topicId": "behavioral.questions-for-interviewer-bank"
      }
    ],
    "description": "Your story inventory, mapped to leadership principles, tightened for delivery."
  }
],
};

export default roadmap;
