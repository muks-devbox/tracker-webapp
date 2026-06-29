// roadmap.js — Auto-generated from Study_Roadmap_Revised_v2.md (v3 — real Week 4 Sunday)
// 16 weeks × 7 days = 112 days | 1436 tasks | LC:160 | HLD:47 | LLD:18 | STAR:31
// DO NOT EDIT BY HAND — re-run the parser if the markdown changes
// Task ID scheme: w{weekNum}-{dayShort}-s{sectionIdx}-t{taskIdx}

export const roadmap = {
  meta: {
    title: "Senior Java Backend Engineer — Interview Preparation",
    subtitle: "Revised v2 — 4 months, 16 weeks",
    totalWeeks: 16,
    totalMonths: 4,
    totalTasks: 1436,
    lcProblems: 160,
    hldDesigns: 47,
    lldDesigns: 18,
    starStories: 31,
  },
  weeks: [
  {
    "weekNum": 1,
    "month": 1,
    "title": "WEEK 1: Java 8–17 Core Features + Arrays, Two Pointers, Sliding Window DSA",
    "theme": "Streams, Lambdas, Optionals, Records, Sealed Classes, Pattern Matching + the two most foundational DSA patterns",
    "days": [
      {
        "dayKey": "w01-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Arrays/Two Pointers",
            "tasks": [
              {
                "text": "LeetCode #1 — Two Sum (HashMap complement lookup, O(n))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1,
                "difficulty": null,
                "id": "w01-mon-s0-t0"
              },
              {
                "text": "Pattern: Why brute force is O(n²) vs HashMap O(n). Trace [2,7,11,15] target=9 step by step before touching editor.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s0-t1"
              },
              {
                "text": "Resource: NeetCode \"Two Sum\" walkthrough (YouTube)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Core Stream Operations",
            "tasks": [
              {
                "text": "stream(), filter(), map(), flatMap(), collect(), reduce()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s1-t0"
              },
              {
                "text": "Intermediate (lazy) vs terminal (eager) operations — understand lazy evaluation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s1-t1"
              },
              {
                "text": "Code exercise: Given List of employees (name, dept, salary) — write pipelines for (a) filter by dept, (b) Collectors.groupingBy(dept), (c) max salary per dept using Collectors.toMap() with merge",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Optional and Functional Interfaces",
            "tasks": [
              {
                "text": "Optional: isPresent(), orElse(), orElseGet() (preferred when default is expensive), orElseThrow(), map(), flatMap() chaining",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s2-t0"
              },
              {
                "text": "Functional interfaces: Function<T,R>, Predicate<T>, Consumer<T>, Supplier<T>, BiFunction",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s2-t1"
              },
              {
                "text": "Function.andThen(), Predicate.and()/or()/negate() — chain them",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s2-t2"
              },
              {
                "text": "Write 5 code snippets replacing null-check boilerplate with Optional; chain 3 transformations using Function",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-mon-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w01-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Sliding Window",
            "tasks": [
              {
                "text": "LeetCode #121 — Best Time to Buy and Sell Stock (single pass, track min price seen so far)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 121,
                "difficulty": null,
                "id": "w01-tue-s0-t0"
              },
              {
                "text": "Pattern: Classic one-pass linear scan. Understand this IS a sliding window variant. Write solution, analyse T: O(n) S: O(1)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Lambdas and Method References",
            "tasks": [
              {
                "text": "Method references: Class::staticMethod, instance::method, Class::new — convert 5 lambdas to method refs each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s1-t0"
              },
              {
                "text": "Effectively final rule in lambdas — why captured variables must be effectively final",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s1-t1"
              },
              {
                "text": "Understand lambda vs anonymous inner class — lambda does NOT create a new scope for 'this'",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Stream Terminal Operations",
            "tasks": [
              {
                "text": "count(), toList() (Java 16), joining(), partitioningBy(), summarizingInt(), toMap() with merge function",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s2-t0"
              },
              {
                "text": "Collectors.groupingBy() + downstream collector (e.g., groupingBy(dept, counting()), groupingBy(dept, summingDouble(salary)))",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s2-t1"
              },
              {
                "text": "Code: Collect a stream of transactions into Map<String, DoubleSummaryStatistics> by category; then into Map<String, List<Transaction>> by status",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-tue-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w01-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Two Pointers",
            "tasks": [
              {
                "text": "LeetCode #15 — 3Sum (sort + two-pointer)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 15,
                "difficulty": null,
                "id": "w01-wed-s0-t0"
              },
              {
                "text": "Pattern: Sorting enables two-pointer; deduplication is the tricky part — skip duplicates after fixing outer element AND after converging the window. Trace [-1,0,1,2,-1,-4] manually before coding.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Parallel Streams",
            "tasks": [
              {
                "text": "parallelStream() uses ForkJoinPool.commonPool() — shared with all parallel operations in the JVM",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s1-t0"
              },
              {
                "text": "When to use: CPU-bound, large datasets, stateless, no order dependency",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s1-t1"
              },
              {
                "text": "Pitfalls: shared mutable state, small datasets (overhead > gain), ordered streams (forEachOrdered kills parallelism benefit)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s1-t2"
              },
              {
                "text": "Write a benchmark showing parallel is slower on a small list (< 1000 elements) vs faster on large CPU-bound computation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Records (Java 16)",
            "tasks": [
              {
                "text": "record Point(int x, int y) {} — compiler generates: canonical constructor, accessors (x(), y()), equals, hashCode, toString",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s2-t0"
              },
              {
                "text": "Compact constructors: for validation (throw in compact constructor if invalid)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s2-t1"
              },
              {
                "text": "Custom methods allowed; implement interfaces; cannot extend other classes (implicitly extends Record)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s2-t2"
              },
              {
                "text": "Compare to Lombok @Value — Record is a JVM-level concept; Lombok is annotation processing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s2-t3"
              },
              {
                "text": "Code: record Money(BigDecimal amount, String currency) with validation; record HttpResponse<T>(int status, T body, Map<String,String> headers)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-wed-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w01-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Sliding Window",
            "tasks": [
              {
                "text": "LeetCode #3 — Longest Substring Without Repeating Characters (sliding window + HashMap)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 3,
                "difficulty": null,
                "id": "w01-thu-s0-t0"
              },
              {
                "text": "Pattern: Expand right, shrink left when duplicate found. Key: jump left to max(left, lastSeen[char] + 1), not just left+1. Trace \"abcabcbb\" step by step.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Sealed Classes (Java 17)",
            "tasks": [
              {
                "text": "sealed interface Shape permits Circle, Rectangle, Triangle — compiler enforces all permitted subclasses exist",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s1-t0"
              },
              {
                "text": "Permits clause creates an exhaustive type hierarchy — enables complete switch expressions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s1-t1"
              },
              {
                "text": "Why sealed: domain modeling where the set of subtypes is known and fixed; replaces enum when subtypes need fields",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s1-t2"
              },
              {
                "text": "Code: sealed interface Result<T> permits Success<T>, Failure with pattern matching switch",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Pattern Matching (Java 16–21)",
            "tasks": [
              {
                "text": "Pattern matching for instanceof (Java 16): if (obj instanceof String s && s.length() > 5) — scope of s is within the if block",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s2-t0"
              },
              {
                "text": "Pattern matching for switch (Java 21 final): case Circle c -> c.radius() * Math.PI; guarded patterns: case Circle c when c.radius() > 10 ->",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s2-t1"
              },
              {
                "text": "Text Blocks (Java 15): stripIndent(), formatted(), \\ line continuation — use for JSON/SQL in tests",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s2-t2"
              },
              {
                "text": "Code: Shape hierarchy with sealed interface; switch expression to calculate area; use guarded patterns",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-thu-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w01-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Two problems",
            "tasks": [
              {
                "text": "LeetCode #11 — Container With Most Water (greedy: always move the shorter side inward)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 11,
                "difficulty": null,
                "id": "w01-fri-s0-t0"
              },
              {
                "text": "LeetCode #238 — Product of Array Except Self (prefix-suffix product, no division)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 238,
                "difficulty": null,
                "id": "w01-fri-s0-t1"
              },
              {
                "text": "Pattern: Container — moving the longer side can only hurt; Product — left pass builds prefix, right pass multiplies suffix",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Java 9–10 Features",
            "tasks": [
              {
                "text": "Java 9: List.of(), Set.of(), Map.of(), Map.entry() — immutable, no null, Set.of no duplicates; Map.ofEntries() for > 10 pairs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s1-t0"
              },
              {
                "text": "Java 9: Optional.ifPresentOrElse(), stream(), or(Supplier<Optional>)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s1-t1"
              },
              {
                "text": "Java 10: var keyword — local type inference only; forbidden for fields, method params, return types, lambda params with explicit types",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s1-t2"
              },
              {
                "text": "Write 8 examples of var — include var list = new ArrayList<>() (infers ArrayList<Object> — bad!) and how to avoid inference pitfalls",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Java 11 Features",
            "tasks": [
              {
                "text": "String: isBlank(), strip() (Unicode-aware unlike trim()), lines(), repeat(n), stripLeading(), stripTrailing()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s2-t0"
              },
              {
                "text": "HTTP Client API (stable in 11): HttpClient, HttpRequest.newBuilder(), HttpResponse.BodyHandlers.ofString()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s2-t1"
              },
              {
                "text": "send() (blocking) vs sendAsync() (returns CompletableFuture<HttpResponse<T>>)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s2-t2"
              },
              {
                "text": "Code: Write a synchronous and an async HTTP GET call to a public API; handle errors with exceptionally()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-fri-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w01-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Sliding Window harder variants (3 problems, ~25 min each)",
            "tasks": [
              {
                "text": "LeetCode #209 — Minimum Size Subarray Sum (variable window — shrink when sum >= target)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 209,
                "difficulty": null,
                "id": "w01-sat-s0-t0"
              },
              {
                "text": "LeetCode #567 — Permutation in String (fixed window, character frequency comparison)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 567,
                "difficulty": null,
                "id": "w01-sat-s0-t1"
              },
              {
                "text": "LeetCode #424 — Longest Repeating Character Replacement (window + maxFreq tracking; invalid when windowSize - maxFreq > k)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 424,
                "difficulty": null,
                "id": "w01-sat-s0-t2"
              },
              {
                "text": "Pattern: Fixed vs variable window distinction. For #424, maxFreq doesn't decrease when shrinking — this is an optimization but prove to yourself it's correct.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Switch Expressions (Java 14) + Text Blocks (Java 15)",
            "tasks": [
              {
                "text": "Arrow syntax (no fall-through), yield keyword (return from block), switch as expression",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s1-t0"
              },
              {
                "text": "Exhaustive matching — compiler error if cases missing for sealed types or enums",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s1-t1"
              },
              {
                "text": "Text blocks: JSON/SQL/HTML without escape noise; \\\\ for line continuation, \\s for trailing space",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s1-t2"
              },
              {
                "text": "Code: Rewrite HTTP status code message lookup using switch expression; write SQL query as text block",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Java 21 — Virtual Threads + Sequenced Collections",
            "tasks": [
              {
                "text": "Virtual Threads: Thread.ofVirtual().start(); Executors.newVirtualThreadPerTaskExecutor(); carrier thread concept; pinning with synchronized",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t0"
              },
              {
                "text": "Keep session light: understand what, why, and the pinning problem. Full deep dive in Week 3.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t1"
              },
              {
                "text": "Sequenced Collections: SequencedCollection.getFirst(), getLast(), reversed(); SequencedMap.firstEntry(), lastEntry(), reversed()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t2"
              },
              {
                "text": "Code: Create 1000 virtual threads, each sleeping 100ms; observe resource use vs platform threads",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t3"
              },
              {
                "text": "Read ByteByteGo System Design 101 — \"Scale from Zero\" chapter (GitHub: ByteByteGoHq/system-design-101)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t4"
              },
              {
                "text": "Structured notes to take:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t5"
              },
              {
                "text": "Vertical vs horizontal scaling — when each hits its ceiling",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t6"
              },
              {
                "text": "Load balancer role, stateless server requirement",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t7"
              },
              {
                "text": "Database replication: primary-replica, read replicas",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t8"
              },
              {
                "text": "Cache: cache-aside pattern, TTL basics, CDN for static assets",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t9"
              },
              {
                "text": "Goal: by end, sketch a \"Scale from Zero\" architecture diagram from memory",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sat-s2-t10"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w01-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #1 (Two Sum) from scratch",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1,
                "difficulty": null,
                "id": "w01-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #3 (Longest Substring) — trace through \"pwwkew\" before coding",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 3,
                "difficulty": null,
                "id": "w01-sun-s0-t1"
              },
              {
                "text": "Q1: What is the difference between map() and flatMap() in Streams? Code example.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t2"
              },
              {
                "text": "Q2: When is orElseGet() preferred over orElse()? Why specifically?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t3"
              },
              {
                "text": "Q3: What does the compact constructor in a Record do? Where would you use it?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t4"
              },
              {
                "text": "Q4: Can you use var for a field? For a lambda parameter? Why not?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t5"
              },
              {
                "text": "Q5: In Longest Repeating Character Replacement — what is the exact shrink condition and why?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t6"
              },
              {
                "text": "Q6: What is a sealed class? How does it enable exhaustive switch?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t7"
              },
              {
                "text": "Java 8: Streams, Lambdas, Optional, Functional Interfaces, Default interface methods",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t8"
              },
              {
                "text": "Java 9: Collection factories (List.of), Module system concept, Optional additions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t9"
              },
              {
                "text": "Java 10: var (local only)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t10"
              },
              {
                "text": "Java 11: String methods (isBlank/strip/lines/repeat), stable HTTP Client",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t11"
              },
              {
                "text": "Java 14: Switch expressions (arrow syntax, yield)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t12"
              },
              {
                "text": "Java 15: Text blocks",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t13"
              },
              {
                "text": "Java 16: Records, instanceof pattern matching",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t14"
              },
              {
                "text": "Java 17: Sealed classes, Pattern matching for switch (preview)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t15"
              },
              {
                "text": "Java 21: Virtual Threads, Structured Concurrency, Sequenced Collections, Pattern matching switch (final)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t16"
              },
              {
                "text": "Skim Monday: Thread lifecycle and synchronized. Concurrency starts here.",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w01-sun-s0-t17"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 2,
    "month": 1,
    "title": "WEEK 2: Java Concurrency Part 1 + JVM Memory/GC + HashMap/Binary Search DSA",
    "theme": "Thread fundamentals, synchronized, volatile, ExecutorService, CompletableFuture, JVM memory model, GC algorithms — this content was packed into 85 minutes in v1. It needs real time.",
    "days": [
      {
        "dayKey": "w02-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — HashMap Patterns",
            "tasks": [
              {
                "text": "LeetCode #49 — Group Anagrams (HashMap with sorted-string as key)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 49,
                "difficulty": null,
                "id": "w02-mon-s0-t0"
              },
              {
                "text": "Pattern: Sorted version of a string is its canonical group key. T: O(n·k·log k). Alternative: use 26-char frequency array as key for O(n·k). Know both.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Thread Lifecycle",
            "tasks": [
              {
                "text": "States: NEW → RUNNABLE → BLOCKED (waiting for lock) → WAITING (wait()/join()) → TIMED_WAITING → TERMINATED",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s1-t0"
              },
              {
                "text": "Thread vs Runnable vs Callable<T>: Callable returns value and can throw checked exception",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s1-t1"
              },
              {
                "text": "join() — current thread waits for target thread to terminate; sleep() — pauses current thread, holds locks; interrupt() — sets flag, thread must check it",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s1-t2"
              },
              {
                "text": "Thread.currentThread().isInterrupted() — check flag; InterruptedException resets flag",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): synchronized deep dive",
            "tasks": [
              {
                "text": "Object-level lock (synchronized method / synchronized(this)) vs class-level (synchronized static method / synchronized(MyClass.class))",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s2-t0"
              },
              {
                "text": "Intrinsic lock (monitor): automatically released on normal exit OR exception",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s2-t1"
              },
              {
                "text": "Reentrant: same thread can re-enter the synchronized block it already holds",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s2-t2"
              },
              {
                "text": "wait()/notify()/notifyAll() — ONLY inside synchronized block; wait releases the lock (unlike sleep)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s2-t3"
              },
              {
                "text": "Pitfall: never synchronize on String literals, Integer values, or new Object() created inside method",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s2-t4"
              },
              {
                "text": "Code: Implement BoundedBlockingQueue using synchronized + wait/notify",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-mon-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w02-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — HashMap",
            "tasks": [
              {
                "text": "LeetCode #347 — Top K Frequent Elements (HashMap frequencies + min-heap of size K)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 347,
                "difficulty": null,
                "id": "w02-tue-s0-t0"
              },
              {
                "text": "Pattern: count → PriorityQueue<int[]>(Comparator.comparingInt(a->a[1])). When size > K, poll. T: O(n log k). Alternative: bucket sort O(n) — know both.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): volatile keyword",
            "tasks": [
              {
                "text": "Visibility guarantee: reads always from main memory; writes immediately flushed to main memory; no CPU cache staleness",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s1-t0"
              },
              {
                "text": "NOT atomicity: i++ is read-modify-write — 3 operations — still a race with volatile",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s1-t1"
              },
              {
                "text": "happens-before: volatile write happens-before subsequent volatile read of same variable",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s1-t2"
              },
              {
                "text": "When volatile is sufficient: single writer + multiple readers (e.g., boolean running = true)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s1-t3"
              },
              {
                "text": "Code: Show stale read bug (thread B doesn't see thread A's write); fix with volatile; show why i++ still fails even with volatile",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): ExecutorService + Thread Pools",
            "tasks": [
              {
                "text": "newFixedThreadPool(n), newCachedThreadPool() (unbounded — careful with spike), newSingleThreadExecutor(), ScheduledExecutorService",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s2-t0"
              },
              {
                "text": "submit() vs execute(): submit takes Callable or Runnable, returns Future; execute takes Runnable, void",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s2-t1"
              },
              {
                "text": "Future<T>: get() (blocking), get(timeout, unit), isDone(), cancel(true/false — mayInterruptIfRunning)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s2-t2"
              },
              {
                "text": "RejectedExecutionPolicy: AbortPolicy (default, throws), CallerRunsPolicy, DiscardPolicy, DiscardOldestPolicy",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s2-t3"
              },
              {
                "text": "Code: Simulate 10 tasks submitted to a FixedThreadPool(3); observe queuing + completion order",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-tue-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w02-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Search",
            "tasks": [
              {
                "text": "LeetCode #704 — Binary Search (master the template)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 704,
                "difficulty": null,
                "id": "w02-wed-s0-t0"
              },
              {
                "text": "Study both templates: (1) left <= right, mid = left + (right-left)/2; result is -1 if not found; (2) left < right, post-loop check. Understand the invariant each maintains before choosing one — don't guess.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Core CompletableFuture API",
            "tasks": [
              {
                "text": "supplyAsync(Supplier) — runs async on ForkJoinPool; thenApply() (transform, may run on same thread); thenApplyAsync() (always new thread)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s1-t0"
              },
              {
                "text": "thenCompose() (flatMap: returns CompletableFuture, chains correctly); thenCombine() (zip two independent futures when both complete)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s1-t1"
              },
              {
                "text": "exceptionally(ex -> fallback) — handle errors, return fallback value; handle(result, ex) — always runs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s1-t2"
              },
              {
                "text": "Code: Concurrently fetch User and Orders; combine with thenCombine(); add exceptionally() for each",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): CompletableFuture Advanced + Java 9 additions",
            "tasks": [
              {
                "text": "allOf() — wait for all; anyOf() — first to complete (be careful: returns Object, need casting)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s2-t0"
              },
              {
                "text": "completeOnTimeout(value, duration, unit) — set value if not done in time (Java 9)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s2-t1"
              },
              {
                "text": "orTimeout(duration, unit) — throw TimeoutException if not done (Java 9)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s2-t2"
              },
              {
                "text": "whenComplete(BiConsumer) — always runs, does NOT transform; handle() does transform",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s2-t3"
              },
              {
                "text": "Common pitfall: blocking with .get() inside a thenApply chain defeats async purpose",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s2-t4"
              },
              {
                "text": "Code: Call 3 external services concurrently; return result of first to succeed; if all fail, use fallback",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-wed-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w02-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Search variant",
            "tasks": [
              {
                "text": "LeetCode #33 — Search in Rotated Sorted Array",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 33,
                "difficulty": null,
                "id": "w02-thu-s0-t0"
              },
              {
                "text": "Pattern: First determine which half is sorted (if nums[left] <= nums[mid] → left half sorted). Then check if target falls in the sorted half. Top-5 most asked binary search variant. Trace [4,5,6,7,0,1,2] target=0.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): JVM Memory Areas",
            "tasks": [
              {
                "text": "Heap: Young Gen (Eden + Survivor S0/S1) + Old Gen (Tenured). Object lifecycle: Eden → Survivor (after Minor GC) → Old Gen (after N survivals, default threshold 15)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s1-t0"
              },
              {
                "text": "Metaspace (Java 8+): class metadata; grows dynamically; replaces PermGen OOM with native memory limit",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s1-t1"
              },
              {
                "text": "Stack: per-thread; stack frames (local vars, operand stack); StackOverflowError (deep recursion) is different from OutOfMemoryError",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s1-t2"
              },
              {
                "text": "PC Register (per-thread): address of current JVM instruction; Native Method Stack: for native (C/C++) method calls",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s1-t3"
              },
              {
                "text": "Draw from memory: rectangle divided into Heap (with sub-regions), Metaspace, Stack(s), PC Register",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): GC Fundamentals",
            "tasks": [
              {
                "text": "Mark-and-Sweep: mark reachable from GC roots → sweep unreachable. GC roots: thread stacks, static fields, JNI references",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s2-t0"
              },
              {
                "text": "Generational hypothesis: most objects die young → Minor GC only scans Young Gen (fast); rarely need Full GC",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s2-t1"
              },
              {
                "text": "Minor GC: Eden → Survivor (copying collector, fast); Major GC: Old Gen collection; Full GC: entire heap (stop-the-world pause)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s2-t2"
              },
              {
                "text": "Stop-the-world (STW) pause: application threads paused during collection — why low latency GCs matter",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-thu-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w02-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Search",
            "tasks": [
              {
                "text": "LeetCode #153 — Find Minimum in Rotated Sorted Array",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 153,
                "difficulty": null,
                "id": "w02-fri-s0-t0"
              },
              {
                "text": "LeetCode #74 — Search a 2D Matrix (treat as flattened 1D; row = mid/cols, col = mid%cols)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 74,
                "difficulty": null,
                "id": "w02-fri-s0-t1"
              },
              {
                "text": "Pattern: #153 — when nums[mid] > nums[right], min is in right half; otherwise it is mid or left half. Prove this invariant to yourself.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): G1GC and ZGC",
            "tasks": [
              {
                "text": "G1GC (Java 9+ default): region-based; each region (~1MB–32MB) dynamically labeled Eden/Survivor/Old/Humongous; -XX:MaxGCPauseMillis=200 is a soft target",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s1-t0"
              },
              {
                "text": "Humongous objects (> 50% region size): go directly to Old Gen region — watch for large arrays",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s1-t1"
              },
              {
                "text": "ZGC (Java 15+ production): sub-millisecond STW; uses colored pointers (load barriers); fully concurrent; choose when latency > throughput",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s1-t2"
              },
              {
                "text": "When to recommend ZGC: heap > 4GB, latency-sensitive APIs, can afford slightly lower throughput",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s1-t3"
              },
              {
                "text": "Key flags: -Xms, -Xmx, -XX:+UseG1GC, -XX:+UseZGC, -XX:MaxGCPauseMillis, -XX:G1HeapRegionSize",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): JVM Performance Tooling",
            "tasks": [
              {
                "text": "Thread dump: jstack <pid>, jcmd <pid> Thread.print, kill -3 on Linux. States to look for: BLOCKED (who holds the lock?), WAITING, DEADLOCK (jstack shows cycle explicitly at bottom)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s2-t0"
              },
              {
                "text": "Heap dump: jmap -dump:format=b,file=heap.hprof <pid>; or -XX:+HeapDumpOnOutOfMemoryError (always on in prod)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s2-t1"
              },
              {
                "text": "Analyse heap dump: Eclipse MAT — Retained Heap, Dominator Tree, Leak Suspects report",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s2-t2"
              },
              {
                "text": "Common leaks: static collection growing unboundedly, ThreadLocal not removed, event listeners never deregistered",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s2-t3"
              },
              {
                "text": "Code: Write ThreadDeadlockDetector using ThreadMXBean.findDeadlockedThreads()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-fri-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w02-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Search advanced + HashMap (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #875 — Koko Eating Bananas (binary search on answer space)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 875,
                "difficulty": null,
                "id": "w02-sat-s0-t0"
              },
              {
                "text": "LeetCode #128 — Longest Consecutive Sequence (HashSet; only count from sequence start when num-1 not in set)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 128,
                "difficulty": null,
                "id": "w02-sat-s0-t1"
              },
              {
                "text": "LeetCode #36 — Valid Sudoku (HashSet per row, per col, per 3x3 box; key = \"box:\"+boxRow+boxCol+\":\"+num)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 36,
                "difficulty": null,
                "id": "w02-sat-s0-t2"
              },
              {
                "text": "Pattern: Binary search on answer = search space is [min possible, max possible]; check() validates if midpoint is a valid answer",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Part 1 (45 min): Caching Strategies",
            "tasks": [
              {
                "text": "Cache-aside (lazy loading): app checks cache first, on miss loads from DB and populates cache. Most common. Tolerates cache failure.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s1-t0"
              },
              {
                "text": "Read-through: cache loads from DB on miss automatically. App only talks to cache.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s1-t1"
              },
              {
                "text": "Write-through: write to cache AND DB synchronously. Consistent but latency on writes.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s1-t2"
              },
              {
                "text": "Write-back (write-behind): write to cache only, async flush to DB. Low write latency, data loss risk.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s1-t3"
              },
              {
                "text": "Eviction: LRU (most-recently-used survives), LFU (most-frequently-used survives), TTL expiry (passive lazy + active periodic sweep)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s1-t4"
              },
              {
                "text": "Cache invalidation: hardest problem. Event-driven (publish on DB write) vs TTL (simple but eventual stale window)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s1-t5"
              }
            ]
          },
          {
            "title": "Part 2 (45 min): Load Balancing",
            "tasks": [
              {
                "text": "L4 (Transport layer): TCP/IP routing; fast; no content inspection; IP+port based decisions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t0"
              },
              {
                "text": "L7 (Application layer): HTTP routing; inspect URL, headers, cookies; smarter routing (A/B test, canary); slightly more overhead",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t1"
              },
              {
                "text": "Algorithms: Round Robin, Weighted Round Robin, Least Connections, IP Hash (sticky sessions — same client always hits same server)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t2"
              },
              {
                "text": "Health checks: passive (watch failure responses) vs active (periodic ping/probe to backend)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t3"
              },
              {
                "text": "Sticky sessions problem: stateful servers with session data; solution = stateless servers + shared session store (Redis)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t4"
              },
              {
                "text": "Note: this session is prerequisite for every HLD design from Week 7 onwards",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t5"
              },
              {
                "text": "Requirements: multi-level, vehicle types (Bike, Car, Truck), different spot sizes, fee calculation, entry/exit tickets",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t6"
              },
              {
                "text": "Classes: ParkingLot (Singleton), Level, ParkingSpot, Vehicle (abstract + subclasses), Ticket, FeeCalculator, EntryGate, ExitGate",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t7"
              },
              {
                "text": "Patterns: Strategy (FeeCalculator: HourlyStrategy, DailyStrategy), Factory (Vehicle creation), State (SpotStatus: AVAILABLE/OCCUPIED/RESERVED)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t8"
              },
              {
                "text": "Code: park(Vehicle v) — find nearest available spot of right size → create Ticket; unpark(Ticket t) — calculate fee with Strategy → mark spot available",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t9"
              },
              {
                "text": "Extension: add WaitingQueue for full lot; VIP spot reservation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sat-s2-t10"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w02-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #33 (Rotated Array Search) — trace manually before coding",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 33,
                "difficulty": null,
                "id": "w02-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #875 (Koko) — define search space and check() function from scratch",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 875,
                "difficulty": null,
                "id": "w02-sun-s0-t1"
              },
              {
                "text": "Q1: Thread states — what is the difference between BLOCKED and WAITING?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t2"
              },
              {
                "text": "Q2: Explain happens-before with a volatile example in code.",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t3"
              },
              {
                "text": "Q3: When is volatile NOT sufficient? Give a concrete code example.",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t4"
              },
              {
                "text": "Q4: thenApply() vs thenCompose() — write a code example showing the difference.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t5"
              },
              {
                "text": "Q5: What replaced PermGen in Java 8? What are the implications for memory configuration?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t6"
              },
              {
                "text": "Q6: Explain G1GC region-based approach vs classic generational GC.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t7"
              },
              {
                "text": "Q7: When would you recommend ZGC over G1GC?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t8"
              },
              {
                "text": "Thread states + transitions (draw the state machine)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t9"
              },
              {
                "text": "synchronized: object-level vs class-level, wait/notify rules",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t10"
              },
              {
                "text": "volatile: visibility only, NOT atomicity; when sufficient",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t11"
              },
              {
                "text": "ExecutorService: 4 factory methods + their use cases",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t12"
              },
              {
                "text": "CompletableFuture: thenApply vs thenCompose vs thenCombine vs allOf vs anyOf",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t13"
              },
              {
                "text": "JVM Memory: Heap regions, Metaspace, Stack, PC Register",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t14"
              },
              {
                "text": "GC: Minor (Young) vs Major (Old) vs Full; G1GC vs ZGC",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t15"
              },
              {
                "text": "Skim Monday: ReentrantLock — when and why to use it over synchronized",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w02-sun-s0-t16"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 3,
    "month": 1,
    "title": "WEEK 3: Java Concurrency Part 2 + Design Patterns Creational + Stacks/Queues DSA",
    "theme": "Complete the concurrency picture — ReentrantLock, Atomic, ConcurrentCollections, Virtual Threads deep dive. Add foundational design patterns. The concurrency story must be airtight before you move on.",
    "days": [
      {
        "dayKey": "w03-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Stacks",
            "tasks": [
              {
                "text": "LeetCode #20 — Valid Parentheses (stack for bracket matching)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 20,
                "difficulty": null,
                "id": "w03-mon-s0-t0"
              },
              {
                "text": "Pattern: Push open brackets; on closing bracket, pop and verify match; empty stack at end = valid. Must solve in < 5 minutes. This is the entry-level stack problem.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): ReentrantLock",
            "tasks": [
              {
                "text": "lock()/unlock() in try-finally block (critical — forgetting unlock() causes deadlock)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s1-t0"
              },
              {
                "text": "tryLock() — non-blocking; tryLock(time, unit) — timed; lockInterruptibly() — thread can be interrupted while waiting",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s1-t1"
              },
              {
                "text": "Fairness: new ReentrantLock(true) — FIFO order, prevents starvation, ~10–20% slower",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s1-t2"
              },
              {
                "text": "Condition variables: lock.newCondition(); await()/signal()/signalAll() — replaces wait()/notify()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s1-t3"
              },
              {
                "text": "Code: Rewrite BoundedBlockingQueue using ReentrantLock + two Conditions (notFull, notEmpty)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): ReadWriteLock + StampedLock",
            "tasks": [
              {
                "text": "ReadWriteLock: multiple concurrent readers OR one exclusive writer; read-heavy workloads benefit",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s2-t0"
              },
              {
                "text": "ReentrantReadWriteLock: readLock().lock(), writeLock().lock(); write lock downgrades to read allowed, upgrade not",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s2-t1"
              },
              {
                "text": "StampedLock (Java 8): tryOptimisticRead() returns stamp; validate(stamp) after reading; if invalid, fall back to full read lock",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s2-t2"
              },
              {
                "text": "When to use StampedLock: extremely read-heavy, 95%+ reads; accepts slightly more complexity",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s2-t3"
              },
              {
                "text": "Code: Implement a thread-safe read-heavy in-memory cache with StampedLock optimistic reads",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-mon-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w03-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Monotonic Stack",
            "tasks": [
              {
                "text": "LeetCode #739 — Daily Temperatures (monotonic decreasing stack of indices)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 739,
                "difficulty": null,
                "id": "w03-tue-s0-t0"
              },
              {
                "text": "Pattern: \"Next greater element\" family. Push index, pop when current element > stack-top element; answer[popped] = current_index - popped_index. P1 — appears in ~20% of medium stack problems.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Medium",
                "id": "w03-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): java.util.concurrent.atomic",
            "tasks": [
              {
                "text": "AtomicInteger, AtomicLong, AtomicReference, AtomicBoolean; compareAndSet(expected, update) — CAS at hardware level",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s1-t0"
              },
              {
                "text": "ABA problem: thread reads A; another thread changes A→B→A; CAS sees A and succeeds incorrectly; AtomicStampedReference solves with version stamp",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s1-t1"
              },
              {
                "text": "LongAdder vs AtomicLong: LongAdder uses striped cells (less contention under high concurrency); use LongAdder for high-frequency increment/counters, AtomicLong for compare-and-swap operations",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s1-t2"
              },
              {
                "text": "Code: Thread-safe counter with AtomicInteger; demonstrate ABA with AtomicStampedReference",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): ConcurrentHashMap Internals (Java 8+)",
            "tasks": [
              {
                "text": "Java 7: 16 segments, each a mini-HashMap with its own ReentrantLock",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s2-t0"
              },
              {
                "text": "Java 8+: CAS for empty bucket insertion; synchronized on the bucket's first node for collision chain; much finer granularity → less contention",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s2-t1"
              },
              {
                "text": "compute(), computeIfAbsent(), merge() — all atomic; prefer over get()+put() pair (not atomic together)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s2-t2"
              },
              {
                "text": "Why size() is approximate: no global count lock; use mappingCount() for long count",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s2-t3"
              },
              {
                "text": "putIfAbsent() vs computeIfAbsent(): computeIfAbsent's lambda only runs once even under concurrent calls",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-tue-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w03-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Monotonic Stack (Hard)",
            "tasks": [
              {
                "text": "LeetCode #84 — Largest Rectangle in Histogram (monotonic increasing stack)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 84,
                "difficulty": null,
                "id": "w03-wed-s0-t0"
              },
              {
                "text": "Pattern: For each bar, find left and right boundary where the bar is the shortest. Stack stores indices. When current bar is shorter than stack top: pop; width = right - stack.peek() - 1; area = height[popped] * width. THE canonical monotonic stack problem. Spend extra time here.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): CopyOnWrite + BlockingQueue",
            "tasks": [
              {
                "text": "CopyOnWriteArrayList: every write (add/remove) creates a full copy of internal array; reads are lock-free; best for read-heavy + rare writes (event listener lists)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s1-t0"
              },
              {
                "text": "ArrayBlockingQueue (bounded, backed by array) vs LinkedBlockingQueue (optional bound, two locks for head/tail)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s1-t1"
              },
              {
                "text": "put() — blocks if full; take() — blocks if empty; offer(timeout) — timed wait; poll(timeout) — timed wait",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s1-t2"
              },
              {
                "text": "Use case: producer-consumer with natural backpressure using bounded BlockingQueue(capacity)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): CountDownLatch + CyclicBarrier + Semaphore",
            "tasks": [
              {
                "text": "CountDownLatch: one-time; threads await(0); countdown() decrements; cannot reset; use: wait for N services to be ready",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s2-t0"
              },
              {
                "text": "CyclicBarrier: all N threads meet at barrier; then all proceed; reusable; optional barrier action (Runnable); use: parallel computation that needs synchronization point",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s2-t1"
              },
              {
                "text": "Semaphore: permits pool; acquire() blocks if 0 permits; release() returns permit; use: limit concurrency (DB connection pool simulation, rate limiter)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s2-t2"
              },
              {
                "text": "Code: CountDownLatch for health check aggregator; Semaphore limiting concurrent external API calls to 10",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-wed-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w03-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — BFS Introduction",
            "tasks": [
              {
                "text": "LeetCode #102 — Binary Tree Level Order Traversal (BFS with Queue)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 102,
                "difficulty": null,
                "id": "w03-thu-s0-t0"
              },
              {
                "text": "Pattern: Queue<TreeNode>; capture queue size at start of each level; poll all nodes of that level, enqueue their children. This is your BFS template — will be heavily expanded in Month 2 for graphs.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Virtual Threads (Java 21)",
            "tasks": [
              {
                "text": "Platform threads: 1:1 mapping to OS threads; ~1MB stack; blocking 1 thread = blocking 1 OS thread",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s1-t0"
              },
              {
                "text": "Virtual threads: mounted on carrier threads (platform threads from ForkJoinPool.commonPool()); when virtual thread blocks (I/O, sleep), carrier unmounts and handles another virtual thread",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s1-t1"
              },
              {
                "text": "Thread.ofVirtual().start(Runnable); Thread.ofVirtual().name(\"name\").start(); Executors.newVirtualThreadPerTaskExecutor()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s1-t2"
              },
              {
                "text": "Pinning: virtual thread stays pinned to carrier when: inside synchronized block, inside native method, inside Object.wait(). Cannot unmount. Solution: replace synchronized with ReentrantLock.",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s1-t3"
              },
              {
                "text": "Best use: I/O-bound workloads (HTTP calls, DB queries, file reads). NOT for CPU-bound.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s1-t4"
              },
              {
                "text": "Code: 10,000 virtual threads each calling Thread.sleep(1000); observe vs 10,000 platform threads",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Structured Concurrency (Java 21)",
            "tasks": [
              {
                "text": "StructuredTaskScope: subtasks are children of scope; scope.fork(callable) to start; scope.join() to wait; automatic cancellation on failure",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s2-t0"
              },
              {
                "text": "ShutdownOnFailure: first child failure cancels all siblings and propagates exception at join()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s2-t1"
              },
              {
                "text": "ShutdownOnSuccess: first successful result cancels all siblings; useful for race-to-first-success",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s2-t2"
              },
              {
                "text": "vs CompletableFuture.allOf(): structured lifetime (scope = stack frame boundary), easier cancellation, no orphaned tasks",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s2-t3"
              },
              {
                "text": "Code: Use ShutdownOnFailure to concurrently call OrderService and PaymentService; both must succeed; either failure cancels the other",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-thu-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w03-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Stacks + Queues",
            "tasks": [
              {
                "text": "LeetCode #155 — Min Stack (O(1) min using pair stack: push (value, currentMin))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 155,
                "difficulty": null,
                "id": "w03-fri-s0-t0"
              },
              {
                "text": "LeetCode #232 — Implement Queue using Stacks (push-stack + pop-stack; transfer when pop-stack empty — amortized O(1))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 232,
                "difficulty": null,
                "id": "w03-fri-s0-t1"
              },
              {
                "text": "Pattern: Min Stack — maintain current minimum at every level of the stack; Queue from Stacks — amortized O(1) per operation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Singleton + Factory Method + Abstract Factory",
            "tasks": [
              {
                "text": "Singleton: DCL (Double-Checked Locking + volatile); Enum Singleton (serialization-safe, reflection-safe, thread-safe by classloader guarantee) — the correct choice",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s1-t0"
              },
              {
                "text": "Factory Method: abstract creator declares factory method; concrete creator overrides; Calendar.getInstance(), DriverManager.getConnection()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s1-t1"
              },
              {
                "text": "Abstract Factory: creates families of related objects; e.g., UIFactory with createButton() + createCheckbox() for Web vs Mobile",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s1-t2"
              },
              {
                "text": "Abstract Factory vs Factory Method: Factory Method = one product; Abstract Factory = family of related products",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Builder + Prototype",
            "tasks": [
              {
                "text": "Builder: inner static Builder class; mandatory params in Builder constructor, optional via setters; build() creates immutable object; Lombok @Builder",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s2-t0"
              },
              {
                "text": "Telescoping constructor anti-pattern: constructor(a), constructor(a,b), constructor(a,b,c) — unreadable and error-prone",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s2-t1"
              },
              {
                "text": "Prototype: Cloneable + clone() — shallow copy by default; Object.clone() is broken (checked exception, not type-safe); prefer copy constructor or serialization for deep copy",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s2-t2"
              },
              {
                "text": "Code: DatabaseConfig builder with mandatory (host, port, dbName) and optional (maxPoolSize, connectTimeout, readOnly) params",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-fri-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w03-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Stacks/Queues advanced (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #496 — Next Greater Element I (monotonic stack + HashMap to map back to original position)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 496,
                "difficulty": null,
                "id": "w03-sat-s0-t0"
              },
              {
                "text": "LeetCode #42 — Trapping Rain Water (monotonic stack OR two-pointer — know both approaches)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 42,
                "difficulty": null,
                "id": "w03-sat-s0-t1"
              },
              {
                "text": "LeetCode #239 — Sliding Window Maximum (monotonic decreasing deque; pop front when out of window; pop back when smaller than current)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 239,
                "difficulty": null,
                "id": "w03-sat-s0-t2"
              },
              {
                "text": "Pattern for #42 two-pointer: maintain leftMax, rightMax; water[i] = min(leftMax, rightMax) - height[i]; move the smaller side",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Structural — Decorator + Proxy",
            "tasks": [
              {
                "text": "Decorator: wraps component to add behaviour at runtime without subclassing; InputStream chain (BufferedInputStream(FileInputStream)) is Java's classic; chain: new TimestampLogger(new FileLogger())",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s1-t0"
              },
              {
                "text": "Proxy: JDK Dynamic Proxy (interface-based, InvocationHandler) vs CGLIB (subclass-based, for concrete classes); Spring AOP uses CGLIB for @Transactional on non-interface classes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s1-t1"
              },
              {
                "text": "Code: Write a caching proxy for a slow DataService using InvocationHandler; measure latency improvement",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Behavioral — Observer + Strategy + Template Method",
            "tasks": [
              {
                "text": "Observer: publisher-subscriber; implement with List<Observer>; Spring's ApplicationEvent + @EventListener is Observer; consider weak references to prevent memory leak",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t0"
              },
              {
                "text": "Strategy: replace conditionals with polymorphism; PaymentStrategy (CreditCard, PayPal, UPI) injected via constructor; Java 8: Function<T,R> as lightweight strategy",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t1"
              },
              {
                "text": "Template Method: abstract class defines algorithm skeleton; abstract steps overridden by subclasses; Spring's JdbcTemplate uses this pattern (open connection → execute → close)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t2"
              },
              {
                "text": "Code: Design a Notification System using Strategy (channel selection) + Observer (event dispatch)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t3"
              },
              {
                "text": "Requirements: books, physical copies, members, borrow/return, reservations, fine calculation, catalog search",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t4"
              },
              {
                "text": "Classes: Library, Book (ISBN, title, author), BookCopy (barcode, BookStatus enum), Member, Loan, Reservation, FineCalculator, Catalog",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t5"
              },
              {
                "text": "Strategy pattern for FineCalculator (daily rate, max cap, grace period)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t6"
              },
              {
                "text": "Code: Library.borrow(memberId, isbn) → find available copy → create Loan with due date → update BookStatus → notify if has reservation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t7"
              },
              {
                "text": "Reservation: FIFO queue per book; notify when copy returned; 24h hold period",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t8"
              },
              {
                "text": "Concurrency: optimistic lock on BookCopy.version to prevent double-borrow",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sat-s2-t9"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w03-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #84 (Largest Rectangle) — trace [2,1,5,6,2,3] through the stack",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 84,
                "difficulty": null,
                "id": "w03-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #42 (Trapping Rain Water) — solve using the TWO-POINTER approach specifically",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 42,
                "difficulty": null,
                "id": "w03-sun-s0-t1"
              },
              {
                "text": "Q1: When should you use ReentrantLock over synchronized? Name 3 specific scenarios.",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t2"
              },
              {
                "text": "Q2: Explain CAS and the ABA problem. How does AtomicStampedReference solve it?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t3"
              },
              {
                "text": "Q3: What is virtual thread pinning? How do you avoid it in code?",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t4"
              },
              {
                "text": "Q4: Explain StructuredTaskScope.ShutdownOnFailure — what happens when one task fails?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t5"
              },
              {
                "text": "Q5: What is the difference between Decorator and Proxy patterns? When would you use each?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t6"
              },
              {
                "text": "Q6: Why is Enum Singleton considered the best implementation?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t7"
              },
              {
                "text": "Q7: CountDownLatch vs CyclicBarrier — name one scenario where you'd use each.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t8"
              },
              {
                "text": "ReentrantLock vs synchronized comparison table (4 key differences)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t9"
              },
              {
                "text": "Atomic: CAS, ABA problem, fix; LongAdder vs AtomicLong",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t10"
              },
              {
                "text": "ConcurrentHashMap: Java 7 (segments) vs Java 8 (CAS + bucket-level sync)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t11"
              },
              {
                "text": "Virtual Threads: use cases, pinning causes (synchronized, native), fix (ReentrantLock)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t12"
              },
              {
                "text": "Structured Concurrency: ShutdownOnFailure vs ShutdownOnSuccess",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t13"
              },
              {
                "text": "Design Patterns: Singleton (enum), Factory, Builder, Decorator, Proxy, Observer, Strategy, Template Method",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t14"
              },
              {
                "text": "Skim Monday: HashMap internal structure (hash function, resize, collision)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w03-sun-s0-t15"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 4,
    "month": 1,
    "title": "WEEK 4: Java Collections Internals + Spring Boot Core + Trees DSA",
    "theme": "HashMap/TreeMap/LinkedHashMap internals that interviewers love to dig into; Spring Boot autoconfiguration, DI, AOP; Binary Tree traversals and the recursion pattern.",
    "days": [
      {
        "dayKey": "w04-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Trees",
            "tasks": [
              {
                "text": "LeetCode #104 — Maximum Depth of Binary Tree (recursive DFS — the base case is everything)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 104,
                "difficulty": null,
                "id": "w04-mon-s0-t0"
              },
              {
                "text": "LeetCode #226 — Invert Binary Tree (recursive swap left and right subtrees)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 226,
                "difficulty": null,
                "id": "w04-mon-s0-t1"
              },
              {
                "text": "Pattern: Base case null check → recurse on children → combine. These two problems are pure recursion setup. Both must be second-nature before harder trees.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): HashMap Internal Structure",
            "tasks": [
              {
                "text": "Backing structure: array of Node<K,V>[] (initially 16 buckets, load factor 0.75)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s1-t0"
              },
              {
                "text": "Hash function: (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16) — spreads high bits into low bits to reduce collisions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s1-t1"
              },
              {
                "text": "Collision handling: chaining (LinkedList) up to TREEIFY_THRESHOLD (8 nodes) → convert bucket to Red-Black Tree; UNTREEIFY_THRESHOLD (6) on removal",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s1-t2"
              },
              {
                "text": "Resize: when size > capacity * loadFactor → double capacity, rehash all entries; why this is O(n) amortized O(1) per put",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s1-t3"
              },
              {
                "text": "Why override equals() AND hashCode() together: if two objects are equal (equals returns true), their hashCodes MUST be equal; reverse not required",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): LinkedHashMap + TreeMap + EnumMap",
            "tasks": [
              {
                "text": "LinkedHashMap: maintains insertion-order (doubly-linked list through entries) or access-order (LRU); override removeEldestEntry() to build LRU Cache",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s2-t0"
              },
              {
                "text": "TreeMap: Red-Black Tree; keys sorted by natural order or Comparator; O(log n) for put/get; NavigableMap methods: floorKey(), ceilingKey(), headMap(), tailMap()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s2-t1"
              },
              {
                "text": "EnumMap: array-backed (enum.ordinal() as index); O(1) access; much faster than HashMap<Enum, V> for enum keys",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s2-t2"
              },
              {
                "text": "Code: Implement LRU Cache using LinkedHashMap with access-order and removeEldestEntry()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-mon-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w04-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Trees",
            "tasks": [
              {
                "text": "LeetCode #100 — Same Tree (recursive structural equality check)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 100,
                "difficulty": null,
                "id": "w04-tue-s0-t0"
              },
              {
                "text": "LeetCode #572 — Subtree of Another Tree (for each node in main tree, check if subtree rooted there equals target)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 572,
                "difficulty": null,
                "id": "w04-tue-s0-t1"
              },
              {
                "text": "Pattern: #572 = Same Tree called at every node. T: O(m*n) brute force; know that hashing or KMP can optimize to O(m+n) but brute force is fine for interview.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Spring Boot Autoconfiguration",
            "tasks": [
              {
                "text": "@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s1-t0"
              },
              {
                "text": "AutoConfiguration: Spring Boot scans META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports; each listed class has @Conditional annotations (e.g., @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s1-t1"
              },
              {
                "text": "SpringApplication.run() → creates ApplicationContext → loads beans → triggers autoconfiguration → starts embedded server",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s1-t2"
              },
              {
                "text": "Property binding: @Value(\"${property}\") for single values; @ConfigurationProperties(prefix=\"app\") for type-safe binding of groups",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s1-t3"
              },
              {
                "text": "application.properties vs application.yml; profile-specific: application-dev.properties; @Profile(\"dev\") on beans",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring Dependency Injection",
            "tasks": [
              {
                "text": "Constructor injection (preferred — immutable, testable, no reflection needed), setter injection, field injection (@Autowired — avoid in prod code, use for tests only)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s2-t0"
              },
              {
                "text": "@Component, @Service, @Repository, @Controller — same as @Component with semantic meaning; @Repository adds exception translation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s2-t1"
              },
              {
                "text": "@Bean in @Configuration: explicit bean definition; useful for third-party classes you can't annotate",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s2-t2"
              },
              {
                "text": "Bean scope: Singleton (default — one instance per context), Prototype (new instance per injection), Request, Session (web-only)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s2-t3"
              },
              {
                "text": "@Primary (tie-breaker when multiple beans of same type), @Qualifier(\"name\") (specific bean by name)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s2-t4"
              },
              {
                "text": "@Lazy: delay initialization until first use; useful for expensive beans not always needed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-tue-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w04-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Trees",
            "tasks": [
              {
                "text": "LeetCode #235 — Lowest Common Ancestor of BST (exploit BST property — no need to search both sides)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 235,
                "difficulty": null,
                "id": "w04-wed-s0-t0"
              },
              {
                "text": "Pattern: If both nodes are less than root → go left; if both greater → go right; otherwise current node is LCA. BST property makes this clean O(h) instead of O(n).",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Spring AOP",
            "tasks": [
              {
                "text": "AOP concepts: Join Point (any method call), Pointcut (expression matching join points), Advice (Before, After, AfterReturning, AfterThrowing, Around), Aspect (@Aspect class)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s1-t0"
              },
              {
                "text": "Around advice: ProceedingJoinPoint.proceed() calls the actual method; you control before and after",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s1-t1"
              },
              {
                "text": "Pointcut expressions: execution(* com.myapp.service.*.*(..)) — all methods in service package; @annotation(Transactional) — any method annotated with @Transactional",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s1-t2"
              },
              {
                "text": "Proxy mechanism: interface → JDK Dynamic Proxy; concrete class → CGLIB subclass; self-invocation problem: calling method on 'this' bypasses proxy → AOP advice not triggered",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s1-t3"
              },
              {
                "text": "Code: Write an @Around aspect that logs method name + args + duration + return value for all @Service methods",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring Exception Handling",
            "tasks": [
              {
                "text": "@ExceptionHandler: method-level in @Controller; handles exception for that controller only",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s2-t0"
              },
              {
                "text": "@ControllerAdvice / @RestControllerAdvice: global exception handler across all controllers",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s2-t1"
              },
              {
                "text": "ResponseEntityExceptionHandler: Spring base class handling common Spring MVC exceptions (MethodArgumentNotValidException, HttpMessageNotReadableException)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s2-t2"
              },
              {
                "text": "ProblemDetail (Spring 6 / RFC 7807): standardized error response format (type, title, status, detail, instance)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s2-t3"
              },
              {
                "text": "Custom exception hierarchy: ApplicationException → BusinessException, ValidationException, ResourceNotFoundException; map each to HTTP status",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s2-t4"
              },
              {
                "text": "Code: Build a GlobalExceptionHandler with @RestControllerAdvice handling: MethodArgumentNotValidException (400), ResourceNotFoundException (404), BusinessException (422), Exception (500)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-wed-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w04-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Tree DFS patterns",
            "tasks": [
              {
                "text": "LeetCode #112 — Path Sum (DFS; subtract target as you go; return true when leaf reached with remaining == 0)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 112,
                "difficulty": null,
                "id": "w04-thu-s0-t0"
              },
              {
                "text": "LeetCode #543 — Diameter of Binary Tree (for each node: diameter through it = left depth + right depth; track max globally with int[] or int[] wrapper)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 543,
                "difficulty": null,
                "id": "w04-thu-s0-t1"
              },
              {
                "text": "Pattern: #543 teaches the \"return one thing but track another\" DFS pattern — the function returns depth (needed for recursion) but updates a global max as a side effect",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Spring Data JPA",
            "tasks": [
              {
                "text": "JpaRepository<T, ID>: save(), findById(), findAll(), deleteById() — CRUD out of the box",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s1-t0"
              },
              {
                "text": "Derived query methods: findByEmailAndStatus(), findByAgeGreaterThan(), findByNameContainingIgnoreCase()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s1-t1"
              },
              {
                "text": "@Query with JPQL: @Query(\"SELECT u FROM User u WHERE u.email = :email\"); named params with @Param",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s1-t2"
              },
              {
                "text": "@Query with nativeQuery=true: raw SQL; use when JPQL can't express the query; harder to test, database-specific",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s1-t3"
              },
              {
                "text": "Pagination: Pageable pageable = PageRequest.of(page, size, Sort.by(\"name\").ascending()); returns Page<T> with content + metadata",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Hibernate Internals",
            "tasks": [
              {
                "text": "Session vs EntityManager: Session is Hibernate-specific; EntityManager is JPA standard; in Spring Data JPA, always use EntityManager/JPA APIs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s2-t0"
              },
              {
                "text": "First-level cache: per Session/EntityManager; prevents repeated DB roundtrips for same entity in same transaction; automatic",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s2-t1"
              },
              {
                "text": "Second-level cache: shared across sessions; @Cacheable + provider (EhCache, Infinispan); needs careful invalidation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s2-t2"
              },
              {
                "text": "N+1 problem: fetching a list of Orders then accessing each order's items triggers N more queries; fix with @EntityGraph, JOIN FETCH, or @BatchSize",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s2-t3"
              },
              {
                "text": "Lazy vs Eager loading: @OneToMany default = LAZY (load on access); @ManyToOne default = EAGER; always use LAZY for collections, be explicit",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s2-t4"
              },
              {
                "text": "Code: Write a JPQL query with JOIN FETCH to solve N+1 on a User → Orders relationship",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-thu-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w04-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Search Trees",
            "tasks": [
              {
                "text": "LeetCode #98 — Validate Binary Search Tree (pass min/max bounds down the tree, not just compare with parent)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 98,
                "difficulty": null,
                "id": "w04-fri-s0-t0"
              },
              {
                "text": "Pattern: Each node must satisfy: min < node.val < max. The mistake is only checking node vs children — BST violation can come from anywhere in the ancestry. Pass bounds explicitly.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Spring Transactions",
            "tasks": [
              {
                "text": "@Transactional: default propagation = REQUIRED (join existing or create new); REQUIRES_NEW (always new, suspends existing); NOT_SUPPORTED, NEVER, SUPPORTS, MANDATORY, NESTED",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s1-t0"
              },
              {
                "text": "Isolation levels: READ_UNCOMMITTED (dirty read), READ_COMMITTED (default PostgreSQL), REPEATABLE_READ (default MySQL), SERIALIZABLE",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s1-t1"
              },
              {
                "text": "Dirty read / Phantom read / Non-repeatable read: know the definition and which isolation level prevents each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s1-t2"
              },
              {
                "text": "@Transactional gotchas: (1) only works on Spring-managed beans; (2) only works on public methods; (3) self-invocation bypasses proxy → transaction not started; (4) default rollback on RuntimeException only — checked exceptions do NOT trigger rollback unless rollbackFor specified",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s1-t3"
              },
              {
                "text": "Transaction timeout: @Transactional(timeout=30) — rollback after 30 seconds",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring Testing",
            "tasks": [
              {
                "text": "@SpringBootTest: loads full ApplicationContext; use for integration tests; expensive",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s2-t0"
              },
              {
                "text": "@WebMvcTest(MyController.class): loads only web layer; mock service layer with @MockBean; fast",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s2-t1"
              },
              {
                "text": "@DataJpaTest: loads only JPA layer + in-memory H2; use for repository tests",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s2-t2"
              },
              {
                "text": "@MockBean: creates and registers a Mockito mock in the Spring context",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s2-t3"
              },
              {
                "text": "MockMvc: mockMvc.perform(get(\"/api/users\").header(\"Auth\",\"token\")).andExpect(status().isOk()).andExpect(jsonPath(\"$.id\").value(1))",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s2-t4"
              },
              {
                "text": "TestContainers: real Docker containers in tests (PostgreSQL, Kafka, Redis); add @Testcontainers + @Container annotations",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-fri-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w04-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Binary Trees medium/hard (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #105 — Construct Binary Tree from Preorder and Inorder (preorder[0] = root; find root in inorder to split left/right subtrees)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 105,
                "difficulty": null,
                "id": "w04-sat-s0-t0"
              },
              {
                "text": "LeetCode #124 — Binary Tree Maximum Path Sum (at each node: gain from left = max(0, leftDFS); gain from right = max(0, rightDFS); update maxSum with node.val + leftGain + rightGain; return node.val + max(leftGain, rightGain))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 124,
                "difficulty": null,
                "id": "w04-sat-s0-t1"
              },
              {
                "text": "LeetCode #199 — Binary Tree Right Side View (BFS level order; take last element of each level)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 199,
                "difficulty": null,
                "id": "w04-sat-s0-t2"
              },
              {
                "text": "Pattern: #124 is the hardest tree problem — the DFS returns one value (max single-path gain) but computes path through node as a side effect. Spend 30+ minutes on this one.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Spring Cache Abstraction",
            "tasks": [
              {
                "text": "@EnableCaching + @Cacheable(\"users\") — caches return value; key = method args by default; custom key: @Cacheable(value=\"users\", key=\"#id\")",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s1-t0"
              },
              {
                "text": "@CachePut: always executes method AND updates cache; use for update operations",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s1-t1"
              },
              {
                "text": "@CacheEvict: removes from cache; allEntries=true to clear entire cache; beforeInvocation=true to evict even if method throws",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s1-t2"
              },
              {
                "text": "@Caching: combine multiple cache operations on one method",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s1-t3"
              },
              {
                "text": "Providers: Caffeine (in-process, fast, production-grade LRU/W-TinyLFU), Redis (distributed, TTL, across instances)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s1-t4"
              },
              {
                "text": "Code: Add @Cacheable to findUserById(); @CacheEvict on updateUser() and deleteUser()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring Boot Actuator + Observability",
            "tasks": [
              {
                "text": "/actuator/health (liveness/readiness probes for K8s), /actuator/metrics, /actuator/info, /actuator/env, /actuator/httptrace",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t0"
              },
              {
                "text": "management.endpoints.web.exposure.include=health,info,metrics (never expose * in prod)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t1"
              },
              {
                "text": "Custom HealthIndicator: implement HealthIndicator, override health() returning Health.up()/down()/withDetail()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t2"
              },
              {
                "text": "Micrometer: vendor-neutral metrics API; integrates with Prometheus, Datadog, New Relic; @Timed, Counter.increment(), Gauge, Timer",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t3"
              },
              {
                "text": "Distributed tracing: Micrometer Tracing (Spring Boot 3) + Zipkin/Jaeger; traceId propagated across services via HTTP headers or Kafka headers",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t4"
              },
              {
                "text": "Code: Add a custom HealthIndicator checking DB connection pool availability; expose metrics for business events (order count, failed payments)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t5"
              },
              {
                "text": "Requirements: shorten URL, redirect to original, expiry, analytics (click count)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t6"
              },
              {
                "text": "Classes: UrlShortenerService, ShortUrl (entity: shortCode, originalUrl, userId, createdAt, expiresAt, clickCount), CodeGenerator, UrlRepository, AnalyticsService, CacheService",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t7"
              },
              {
                "text": "Code generation: Base62 encoding of auto-increment ID (characters: 0-9, a-z, A-Z); 6 chars = 62^6 = ~56 billion combinations",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t8"
              },
              {
                "text": "Pre-generate vs on-demand: on-demand (encode ID), collision safe by design if using unique sequential IDs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t9"
              },
              {
                "text": "Cache layer: Redis with TTL = URL expiry; cache-aside pattern; on cache miss, load from DB, populate cache",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t10"
              },
              {
                "text": "Analytics: async (publish click event to a queue; AnalyticsService consumes); don't block redirect for analytics",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t11"
              },
              {
                "text": "Code: createShortUrl(originalUrl, userId, expiryDays) → save to DB → cache it; redirect(shortCode) → cache hit → 301/302 redirect; getLinkStats(shortCode) → return click count, creation date",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sat-s2-t12"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w04-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "[30 min] DSA Re-Solve (no hints)",
            "tasks": [
              {
                "text": "Re-solve LeetCode #104 (Maximum Depth of Binary Tree) from scratch — base case first, then recurse",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 104,
                "difficulty": "Easy",
                "id": "w04-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #543 (Diameter of Binary Tree) — trace the 'return depth, track max diameter as side effect' DFS pattern on a sample tree before coding",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 543,
                "difficulty": "Easy",
                "id": "w04-sun-s0-t1"
              }
            ]
          },
          {
            "title": "[45 min] Tech Self-Quiz",
            "tasks": [
              {
                "text": "Q1: How does HashMap handle collisions in Java 8+? At what threshold does a bucket convert to a Red-Black Tree, and when does it revert back?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s1-t0"
              },
              {
                "text": "Q2: Why must you override both equals() AND hashCode() together? What breaks if you override only one?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s1-t1"
              },
              {
                "text": "Q3: What is Spring @Transactional self-invocation problem? Write a concrete code example that shows the bug and explain how to fix it.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s1-t2"
              },
              {
                "text": "Q4: What is the N+1 query problem in Hibernate? Write a JPQL query with JOIN FETCH that solves it for a User → Orders relationship.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s1-t3"
              },
              {
                "text": "Q5: What is the difference between @WebMvcTest and @SpringBootTest? When do you use each?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s1-t4"
              },
              {
                "text": "Q6: Explain Spring AOP proxy types — when does Spring use JDK Dynamic Proxy vs CGLIB? What is the self-invocation blind spot?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s1-t5"
              }
            ]
          },
          {
            "title": "[30 min] Interview Q&A Bank",
            "tasks": [
              {
                "text": "Write polished 2–3 sentence answer: \"Explain how HashMap works internally in Java 8 — specifically the treeification threshold and why it matters.\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s2-t0"
              },
              {
                "text": "Write polished 2–3 sentence answer: \"What is Spring Boot Autoconfiguration? How does @ConditionalOnMissingBean work?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s2-t1"
              },
              {
                "text": "Write polished 2–3 sentence answer: \"Explain the difference between LAZY and EAGER loading in Hibernate and what the safe default is for collections.\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s2-t2"
              },
              {
                "text": "Write polished 2–3 sentence answer: \"What is the diameter of a binary tree and how does the DFS solution trade off what it returns vs what it tracks?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s2-t3"
              },
              {
                "text": "Write polished 2–3 sentence answer: \"Why does @Transactional only rollback on RuntimeException by default and not checked exceptions?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s2-t4"
              }
            ]
          },
          {
            "title": "[30 min] Cheat Sheet — Week 4",
            "tasks": [
              {
                "text": "HashMap: array of Node<K,V>[], load factor 0.75, TREEIFY_THRESHOLD=8 (→ Red-Black Tree), UNTREEIFY_THRESHOLD=6, resize = double capacity + rehash all",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t0"
              },
              {
                "text": "LinkedHashMap: maintains insertion-order OR access-order (LRU); override removeEldestEntry() to auto-evict",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t1"
              },
              {
                "text": "TreeMap: Red-Black Tree; sorted keys by natural order or Comparator; O(log n) put/get; NavigableMap: floorKey(), ceilingKey(), headMap(), tailMap()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t2"
              },
              {
                "text": "Spring Boot Autoconfiguration: @EnableAutoConfiguration → scans AutoConfiguration.imports → @Conditional gates (OnClass, OnMissingBean, OnProperty)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t3"
              },
              {
                "text": "Spring DI: Constructor injection (preferred — immutable, testable) > Setter > Field (@Autowired — avoid in prod); @Primary + @Qualifier for disambiguation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t4"
              },
              {
                "text": "Spring AOP: JDK Dynamic Proxy (interface-based) vs CGLIB (concrete class subclass); self-invocation bypasses proxy → AOP/Transactional not triggered",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t5"
              },
              {
                "text": "Hibernate: N+1 (fix: JOIN FETCH or @EntityGraph); first-level cache (per Session, automatic); LAZY default for @OneToMany; EAGER default for @ManyToOne (override to LAZY)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t6"
              },
              {
                "text": "@Transactional gotchas: (1) rollback on RuntimeException only; (2) public methods only; (3) self-invocation bypasses proxy; (4) Spring-managed beans only",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s3-t7"
              }
            ]
          },
          {
            "title": "[15 min] Plan Week 5",
            "tasks": [
              {
                "text": "Skim Monday: Microservices Architecture — bounded context, database-per-service pattern, service decomposition strategies. Recursion pattern for DSA begins.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w04-sun-s4-t0"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 5,
    "month": 2,
    "title": "WEEK 5: Microservices Foundations + Spring Ecosystem + Recursion/Backtracking DSA",
    "theme": "Microservices design, inter-service communication (REST/Kafka/gRPC), resiliency patterns, Feign, Kafka basics, and the recursion + backtracking pattern for DSA.",
    "days": [
      {
        "dayKey": "w05-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Recursion",
            "tasks": [
              {
                "text": "LeetCode #206 — Reverse Linked List (recursive and iterative — know both)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 206,
                "difficulty": null,
                "id": "w05-mon-s0-t0"
              },
              {
                "text": "LeetCode #21 — Merge Two Sorted Lists (recursive merge)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 21,
                "difficulty": null,
                "id": "w05-mon-s0-t1"
              },
              {
                "text": "Pattern: Recursion trust principle — trust that recursive call returns correct answer; only define what the current call does with it. For #206: head.next.next = head; head.next = null; return reversed.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Microservices Core Principles",
            "tasks": [
              {
                "text": "Single Responsibility: one service = one bounded context (not one class, one table, or one endpoint)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s1-t0"
              },
              {
                "text": "Domain-Driven Design concepts: bounded context, aggregate, domain event, ubiquitous language",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s1-t1"
              },
              {
                "text": "Database per service: no shared databases between microservices; each service owns its data store; sync via events",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s1-t2"
              },
              {
                "text": "Decomposition strategies: by business capability (Order Service, Payment Service, Inventory Service), by subdomain, by team ownership (Conway's Law)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s1-t3"
              },
              {
                "text": "Service communication patterns: synchronous (REST, gRPC) vs asynchronous (Kafka, RabbitMQ); when to use each",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring Cloud Config + Eureka + API Gateway",
            "tasks": [
              {
                "text": "Spring Cloud Config Server: centralised config; Git-backed; @RefreshScope for runtime refresh without restart; encrypt sensitive props",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s2-t0"
              },
              {
                "text": "Eureka Service Registry: services register (client sends heartbeat every 30s); API gateway or clients query Eureka for addresses; self-preservation mode (don't deregister when % of heartbeat loss exceeds threshold)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s2-t1"
              },
              {
                "text": "Spring Cloud Gateway: routes by path/header/method; filters (add auth header, rate limit, circuit breaker); reactive (non-blocking); replace Zuul",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s2-t2"
              },
              {
                "text": "Route predicate: Path=/api/orders/**, Method=GET; filters: AddRequestHeader, StripPrefix, CircuitBreaker, RequestRateLimiter",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-mon-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w05-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Backtracking",
            "tasks": [
              {
                "text": "LeetCode #78 — Subsets (backtracking: at each index, choose to include or exclude the element)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 78,
                "difficulty": null,
                "id": "w05-tue-s0-t0"
              },
              {
                "text": "Pattern: Template: backtrack(start, current): if condition met, add to result; for i from start to n: add nums[i]; recurse(i+1); remove nums[i] (backtrack). The \"choose → explore → unchoose\" cycle.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): OpenFeign Client",
            "tasks": [
              {
                "text": "@FeignClient(name=\"order-service\", url=\"${order.service.url}\"): declarative HTTP client; define interface matching the remote API",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s1-t0"
              },
              {
                "text": "@GetMapping, @PostMapping with @PathVariable, @RequestParam, @RequestBody — same annotations as controllers",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s1-t1"
              },
              {
                "text": "Error handling: ErrorDecoder for custom exception mapping; Retryer for retry logic",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s1-t2"
              },
              {
                "text": "FeignClient with Eureka: use name only (no url) → Feign resolves via service registry + load balancing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s1-t3"
              },
              {
                "text": "Interceptors: RequestInterceptor → add auth token, correlation ID to every outgoing request",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s1-t4"
              },
              {
                "text": "Code: Write an OrderServiceClient Feign interface calling POST /orders, GET /orders/{id}; add auth interceptor",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): RestTemplate vs WebClient",
            "tasks": [
              {
                "text": "RestTemplate: synchronous, blocking; still widely used; getForObject(), postForEntity(), exchange()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s2-t0"
              },
              {
                "text": "WebClient (Spring WebFlux): reactive, non-blocking; fluent API; works in both Servlet and Reactive stacks",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s2-t1"
              },
              {
                "text": "WebClient.create(baseUrl).get().uri(\"/users/{id}\", id).retrieve().bodyToMono(User.class)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s2-t2"
              },
              {
                "text": ".bodyToFlux() for streams; .block() to convert to synchronous (use only in test code or migration)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s2-t3"
              },
              {
                "text": "Error handling: .onStatus(status -> status.is4xxClientError(), response -> ...) vs .retrieve() which throws WebClientResponseException on 4xx/5xx",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s2-t4"
              },
              {
                "text": "When to use which: WebClient is preferred for new code (reactive-ready); RestTemplate is fine for existing sync codebases",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-tue-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w05-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Backtracking",
            "tasks": [
              {
                "text": "LeetCode #46 — Permutations (backtracking with boolean[] used array; add to result when current.size() == nums.length)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 46,
                "difficulty": null,
                "id": "w05-wed-s0-t0"
              },
              {
                "text": "Pattern: Unlike subsets (start index), permutations use \"used\" array — every position can pick from all unused elements. N! permutations. Trace [\"1\",\"2\",\"3\"] manually through the recursion tree.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Circuit Breaker Pattern",
            "tasks": [
              {
                "text": "States: CLOSED (normal — calls pass through) → OPEN (failure threshold breached — fail fast) → HALF-OPEN (test calls allowed to probe recovery)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s1-t0"
              },
              {
                "text": "Failure threshold: count-based (e.g., 5 consecutive failures) or rate-based (e.g., 50% failure rate in last 100 calls)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s1-t1"
              },
              {
                "text": "@CircuitBreaker(name=\"orderService\", fallbackMethod=\"getOrdersFallback\"): annotate service method; define fallback with same signature + Throwable param",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s1-t2"
              },
              {
                "text": "Configuration: slidingWindowType=COUNT_BASED, slidingWindowSize=10, failureRateThreshold=50, waitDurationInOpenState=5s, permittedNumberOfCallsInHalfOpenState=3",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s1-t3"
              },
              {
                "text": "Why fail fast: prevents cascading failure across services; releases resources; gives downstream time to recover",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Retry + Rate Limiter + Bulkhead",
            "tasks": [
              {
                "text": "@Retry(name=\"paymentService\", fallbackMethod=\"...\"): retryable transient failures; configure maxAttempts, waitDuration, exponentialBackoffMultiplier; DO NOT retry non-idempotent operations without careful thought",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s2-t0"
              },
              {
                "text": "@RateLimiter(name=\"externalApi\"): limits calls per time period; prevents overwhelming downstream APIs you don't control; LimitForPeriod, LimitRefreshPeriod",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s2-t1"
              },
              {
                "text": "@Bulkhead(name=\"database\"): limits concurrent calls; SemaphoreBulkhead (limit concurrent threads); ThreadPoolBulkhead (dedicated thread pool, async)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s2-t2"
              },
              {
                "text": "Annotation order: @Bulkhead → @RateLimiter → @CircuitBreaker → @Retry (innermost wraps outermost)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s2-t3"
              },
              {
                "text": "Code: Add all 4 annotations to an external payment service call with appropriate fallbacks",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-wed-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w05-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Backtracking",
            "tasks": [
              {
                "text": "LeetCode #39 — Combination Sum (backtracking; allow reuse of same element; start from same index when recursing)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 39,
                "difficulty": null,
                "id": "w05-thu-s0-t0"
              },
              {
                "text": "Pattern: Combination Sum differs from Subsets by allowing reuse (pass same index i, not i+1 to recursion). Prune by skipping when candidate > remaining target.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Kafka Core Concepts",
            "tasks": [
              {
                "text": "Topic: logical channel; Partition: ordered, immutable log; each message has an offset (position within partition)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s1-t0"
              },
              {
                "text": "Producer → Broker → Consumer Group; Consumer Group: each partition consumed by exactly one consumer in the group; scale consumers by adding partitions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s1-t1"
              },
              {
                "text": "Offset: consumer tracks which messages it has processed; commit offset = checkpoint; auto-commit vs manual commit",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s1-t2"
              },
              {
                "text": "Replication: replication.factor=3; ISR (In-Sync Replicas); leader handles reads and writes; replica lag = follower behind leader",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s1-t3"
              },
              {
                "text": "Retention: by time (log.retention.hours=168) or size (log.retention.bytes); messages not deleted after consumption — consumers control their own offset",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s1-t4"
              },
              {
                "text": "Key-based partitioning: messages with same key go to same partition → guarantees order per key (e.g., all events for userId=123 to same partition)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Kafka in Spring Boot",
            "tasks": [
              {
                "text": "@KafkaListener(topics=\"orders\", groupId=\"order-processor\"): consume messages",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t0"
              },
              {
                "text": "KafkaTemplate.send(topic, key, value): produce messages; returns CompletableFuture; add callback for error handling",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t1"
              },
              {
                "text": "ConsumerConfig: auto.offset.reset=earliest/latest; enable.auto.commit=false (for manual commit); max.poll.records; session.timeout.ms",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t2"
              },
              {
                "text": "Manual offset commit: Acknowledgment.acknowledge() in @KafkaListener; prevents message loss on crash before processing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t3"
              },
              {
                "text": "Deserializers: StringDeserializer, JsonDeserializer (Spring Kafka); schema registry for Avro",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t4"
              },
              {
                "text": "Dead Letter Topic (DLT): @DltHandler; messages that fail after max retries are published to DLT for inspection; never silently drop failures",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t5"
              },
              {
                "text": "Code: Write a KafkaProducer publishing OrderEvent and a @KafkaListener consuming it with manual ack + DLT handler",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-thu-s2-t6"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w05-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Backtracking",
            "tasks": [
              {
                "text": "LeetCode #51 — N-Queens (backtracking; track columns, diagonals, anti-diagonals with HashSets; not just row-by-row check)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 51,
                "difficulty": null,
                "id": "w05-fri-s0-t0"
              },
              {
                "text": "Pattern: N-Queens is the canonical backtracking hard problem. Use three boolean structures: col[], diag1[] (row-col+n), diag2[] (row+col). Trace 4-Queens by hand first.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w05-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Kafka Transactions + Exactly-Once",
            "tasks": [
              {
                "text": "At-most-once: auto-commit before processing; message lost if consumer crashes after commit but before processing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s1-t0"
              },
              {
                "text": "At-least-once: manual commit after processing; message reprocessed if consumer crashes after processing but before commit (duplicates possible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s1-t1"
              },
              {
                "text": "Exactly-once: requires idempotent producer (enable.idempotence=true) + Kafka transactions (transactional.id) + read-process-write in one atomic Kafka transaction",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s1-t2"
              },
              {
                "text": "Outbox Pattern: write to DB + outbox table in same transaction; separate process polls outbox and publishes to Kafka; guarantees no message loss even if Kafka is down",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Idempotency Design + API Idempotency Keys",
            "tasks": [
              {
                "text": "Idempotent producer: Kafka assigns sequence numbers; broker deduplicates retries within session",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s2-t0"
              },
              {
                "text": "Idempotency in REST APIs: PUT and DELETE are idempotent by HTTP spec; POST is not; add Idempotency-Key header for POST operations (Stripe, PayPal pattern)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s2-t1"
              },
              {
                "text": "DB-level idempotency: unique constraint on (userId, orderId, idempotencyKey); INSERT ON CONFLICT DO NOTHING; return existing result on duplicate",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s2-t2"
              },
              {
                "text": "Message consumer idempotency: store processedMessageIds in DB (with TTL); check before processing; covers exactly-once for consumers using at-least-once broker delivery",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s2-t3"
              },
              {
                "text": "Code: Implement idempotent payment processing — check idempotencyKey in DB before charging; return existing result if duplicate request",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-fri-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w05-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Backtracking + Recursion advanced (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #22 — Generate Parentheses (backtrack with open/close counters; add '(' when open < n; add ')' when close < open)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 22,
                "difficulty": null,
                "id": "w05-sat-s0-t0"
              },
              {
                "text": "LeetCode #79 — Word Search (DFS on grid with in-place marking; unmark on backtrack)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 79,
                "difficulty": null,
                "id": "w05-sat-s0-t1"
              },
              {
                "text": "LeetCode #131 — Palindrome Partitioning (backtrack + precomputed isPalindrome[i][j] DP table)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 131,
                "difficulty": null,
                "id": "w05-sat-s0-t2"
              },
              {
                "text": "Pattern: #79 teaches grid DFS + backtracking: mark cell as visited by replacing with '#', recurse 4 directions, restore on return. Space O(1) but mutates input — know the tradeoff.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): gRPC Fundamentals",
            "tasks": [
              {
                "text": "Protocol Buffers (.proto): language-neutral schema; message definitions; service definitions with RPC methods",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s1-t0"
              },
              {
                "text": "4 RPC types: Unary (single request, single response), Server Streaming (request, stream of responses), Client Streaming (stream of requests, single response), Bidirectional Streaming",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s1-t1"
              },
              {
                "text": "Why gRPC over REST: binary serialization (smaller, faster than JSON), HTTP/2 (multiplexing, header compression), strongly-typed contracts, built-in code generation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s1-t2"
              },
              {
                "text": "When to use gRPC: internal service-to-service; low latency requirements; streaming; typed contracts important; avoid for browser clients (gRPC-Web needed)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): gRPC in Spring Boot (spring-boot-starter-grpc)",
            "tasks": [
              {
                "text": "Write a .proto file: syntax=\"proto3\"; define a UserService with GetUser(UserRequest) returns (UserResponse); compile → generated stubs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t0"
              },
              {
                "text": "Implement service: extend UserServiceGrpc.UserServiceImplBase; override getUser(); use responseObserver.onNext() + onCompleted()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t1"
              },
              {
                "text": "Write client: ManagedChannel; UserServiceGrpc.newBlockingStub(channel); call stub.getUser(request)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t2"
              },
              {
                "text": "Error handling: StatusRuntimeException with Status codes (NOT_FOUND, INVALID_ARGUMENT, INTERNAL)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t3"
              },
              {
                "text": "Interceptors: add logging, auth token validation, tracing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t4"
              },
              {
                "text": "Code: Implement a UserService gRPC server + client; add a server-side interceptor that validates an API key from metadata",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t5"
              },
              {
                "text": "Requirements: N elevators, M floors, requests from inside and outside cabin, optimal dispatch",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t6"
              },
              {
                "text": "Classes: ElevatorSystem (Singleton), Elevator, ElevatorButton, FloorButton, Request (ExternalRequest: floor + direction, InternalRequest: destination), Scheduler (interface), OptimalScheduler",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t7"
              },
              {
                "text": "State: ElevatorState enum (IDLE, MOVING_UP, MOVING_DOWN, DOOR_OPEN)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t8"
              },
              {
                "text": "Scheduling: FCFS, SCAN (elevator direction): continue in same direction while requests exist; reverse only when no more in same direction",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t9"
              },
              {
                "text": "Code: Scheduler.assignElevator(request) → pick closest idle or same-direction elevator; Elevator.addDestination(floor); Elevator.move() updates state and processes floors",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t10"
              },
              {
                "text": "Observer: notify FloorDisplay + ElevatorDisplay on state change",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sat-s2-t11"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w05-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #46 (Permutations) — write full backtracking solution with used[] array from scratch",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 46,
                "difficulty": null,
                "id": "w05-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #124 (Binary Tree Max Path Sum) — trace through the DFS logic",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 124,
                "difficulty": null,
                "id": "w05-sun-s0-t1"
              },
              {
                "text": "Q1: What is the ABA problem in CAS and how does AtomicStampedReference fix it?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t2"
              },
              {
                "text": "Q2: Explain Spring @Transactional propagation: REQUIRED vs REQUIRES_NEW. When would you use REQUIRES_NEW?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t3"
              },
              {
                "text": "Q3: What is the N+1 query problem? Write a JPQL query that solves it using JOIN FETCH.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t4"
              },
              {
                "text": "Q4: What is the difference between at-least-once and exactly-once Kafka delivery? What does the Outbox Pattern solve?",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t5"
              },
              {
                "text": "Q5: Explain Circuit Breaker states: CLOSED → OPEN → HALF-OPEN. What triggers each transition?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t6"
              },
              {
                "text": "Q6: Why is gRPC preferred over REST for internal service-to-service communication? Name 3 concrete reasons.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t7"
              },
              {
                "text": "Resilience4j: Circuit Breaker states, Retry, RateLimiter, Bulkhead — one-liner for each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t8"
              },
              {
                "text": "Kafka: offset commit strategies (at-most-once, at-least-once, exactly-once), Outbox Pattern",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t9"
              },
              {
                "text": "Spring Transactions: 7 propagation types, 4 isolation levels, 4 @Transactional gotchas",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t10"
              },
              {
                "text": "gRPC: 4 RPC types, vs REST comparison, when to use",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t11"
              },
              {
                "text": "Backtracking template: choose → explore → unchoose",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t12"
              },
              {
                "text": "Skim Monday: Kubernetes basics — Pods, Deployments, Services. You'll use this in Week 6.",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w05-sun-s0-t13"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 6,
    "month": 2,
    "title": "WEEK 6: Kubernetes + OpenShift + Graphs DSA + STAR Story Bank Begins",
    "theme": "K8s core objects, OpenShift specifics, Azure cloud services, and Graph traversal (BFS/DFS). First STAR story bank session today.",
    "days": [
      {
        "dayKey": "w06-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graphs BFS",
            "tasks": [
              {
                "text": "LeetCode #200 — Number of Islands (BFS/DFS grid; mark visited in-place or with visited[][] array)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 200,
                "difficulty": null,
                "id": "w06-mon-s0-t0"
              },
              {
                "text": "Pattern: For each unvisited '1', do BFS/DFS marking all connected '1's as visited. Island count = number of BFS/DFS initiations. Both BFS and DFS work — know both. This is the gateway graph problem.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Pod + Deployment + ReplicaSet",
            "tasks": [
              {
                "text": "Pod: smallest deployable unit; one or more containers sharing network namespace + volumes; NOT directly deployed (ReplicaSet manages)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s1-t0"
              },
              {
                "text": "Deployment: desired state (replicas, image, resource limits); creates and manages ReplicaSet",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s1-t1"
              },
              {
                "text": "ReplicaSet: ensures N pod replicas running at any time; if pod dies → creates replacement",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s1-t2"
              },
              {
                "text": "Rolling Update: Deployment rolls out new pods, terminates old ones; maxSurge + maxUnavailable control pace; rollback: kubectl rollout undo deployment/myapp",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s1-t3"
              },
              {
                "text": "Resource requests vs limits: requests = scheduler reservation (what K8s guarantees); limits = hard cap (OOMKilled if exceeded); always set both for production pods",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w06-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Service + Ingress + ConfigMap/Secret",
            "tasks": [
              {
                "text": "Service: stable IP + DNS name for a set of pods; types: ClusterIP (internal), NodePort (external on each node), LoadBalancer (cloud LB provisioned), ExternalName",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s2-t0"
              },
              {
                "text": "Ingress: HTTP/HTTPS routing rules; path-based and host-based routing; TLS termination; requires Ingress Controller (nginx, traefik)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s2-t1"
              },
              {
                "text": "ConfigMap: non-sensitive config; mount as env vars or volume files",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s2-t2"
              },
              {
                "text": "Secret: base64-encoded (not encrypted by default — use SealedSecrets, Vault, or etcd encryption); mount as env var or volume",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s2-t3"
              },
              {
                "text": "Liveness probe: is the pod healthy? (kill if fails); Readiness probe: is the pod ready to serve traffic? (remove from Service endpoints if fails); StartupProbe: for slow-starting apps",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-mon-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w06-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graphs DFS",
            "tasks": [
              {
                "text": "LeetCode #133 — Clone Graph (DFS with HashMap<Node, CloneNode> to handle cycles)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 133,
                "difficulty": null,
                "id": "w06-tue-s0-t0"
              },
              {
                "text": "Pattern: DFS on graph requires visited map (not just array) when nodes can have arbitrary connections. Map from original node to its clone prevents infinite loops and enables pointing to existing clones for shared references.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): HPA + VPA + StatefulSet",
            "tasks": [
              {
                "text": "HPA: scale Deployment based on CPU/memory/custom metrics; requires metrics-server; min and max replica bounds",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s1-t0"
              },
              {
                "text": "KEDA: event-driven autoscaler; scale on Kafka lag, queue depth, custom metrics beyond CPU/memory; scale to 0 possible",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s1-t1"
              },
              {
                "text": "StatefulSet: for stateful apps (Kafka, Cassandra, ZooKeeper); pods have stable network identity (pod-0, pod-1...), stable storage; ordered startup/shutdown",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s1-t2"
              },
              {
                "text": "vs Deployment: Deployment pods are interchangeable; StatefulSet pods have identity + sticky storage",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s1-t3"
              },
              {
                "text": "Headless Service: ClusterIP=None; DNS returns individual pod IPs; used with StatefulSet for peer discovery",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): PersistentVolume + Namespace + RBAC",
            "tasks": [
              {
                "text": "PV/PVC/StorageClass: PersistentVolume (actual storage), PersistentVolumeClaim (request for storage), StorageClass (dynamic provisioner: aws-ebs, azure-disk)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s2-t0"
              },
              {
                "text": "Access modes: ReadWriteOnce (single node), ReadOnlyMany (multiple nodes read-only), ReadWriteMany (multiple nodes read-write — requires NFS or special driver)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s2-t1"
              },
              {
                "text": "Namespace: virtual cluster within K8s; isolate teams/environments; ResourceQuota per namespace; NetworkPolicy per namespace",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s2-t2"
              },
              {
                "text": "RBAC: Role (namespace-scoped rules) + RoleBinding (binds role to ServiceAccount/User); ClusterRole + ClusterRoleBinding (cluster-wide); Principle of least privilege",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-tue-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w06-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graphs BFS (Shortest Path)",
            "tasks": [
              {
                "text": "LeetCode #994 — Rotting Oranges (multi-source BFS; start from all rotten oranges simultaneously; BFS level = minutes)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 994,
                "difficulty": null,
                "id": "w06-wed-s0-t0"
              },
              {
                "text": "Pattern: Multi-source BFS — initialize queue with ALL sources; then BFS layer by layer. Layer count = shortest path from any source. Key insight: BFS gives shortest path in unweighted graphs.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): OpenShift Specifics",
            "tasks": [
              {
                "text": "OpenShift vs vanilla K8s: OpenShift = K8s + security hardening + developer tools + enterprise support (Red Hat)",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s1-t0"
              },
              {
                "text": "Security Context Constraints (SCC): OpenShift's admission controller; more restrictive than K8s PodSecurityAdmission; by default pods run as non-root, no privilege escalation",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s1-t1"
              },
              {
                "text": "Routes: OpenShift equivalent of Ingress; simpler for basic HTTP/HTTPS; built-in TLS termination and edge routing",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s1-t2"
              },
              {
                "text": "ImageStream: OpenShift-specific; tracks Docker image tags + triggers deployments on image change; integrates with internal registry",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s1-t3"
              },
              {
                "text": "BuildConfig + DeploymentConfig: OpenShift native build/deploy pipeline; being replaced by Tekton Pipelines for new workloads",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s1-t4"
              },
              {
                "text": "oc CLI vs kubectl: oc is a superset of kubectl; all kubectl commands work; oc login, oc new-app, oc expose, oc get routes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Azure Cloud Services for Java Backends",
            "tasks": [
              {
                "text": "Azure Kubernetes Service (AKS): managed K8s; Azure-managed control plane; integrates with Azure AD for RBAC, Azure Container Registry, Azure Monitor",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s2-t0"
              },
              {
                "text": "Azure Service Bus: enterprise messaging; queues (point-to-point) vs topics/subscriptions (pub-sub); dead-letter queue; sessions for ordered processing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s2-t1"
              },
              {
                "text": "Azure Key Vault: secrets, certificates, encryption keys management; Spring integration: azure-spring-boot-starter-keyvault reads secrets as properties",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s2-t2"
              },
              {
                "text": "Azure Blob Storage: object storage; SDK for Java; BlobContainerClient, BlobClient; SAS tokens for time-limited access",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s2-t3"
              },
              {
                "text": "Azure Application Insights: APM tool; auto-instrument Spring Boot with Java agent; distributed traces, exceptions, custom metrics",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-wed-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w06-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graphs — Union Find",
            "tasks": [
              {
                "text": "LeetCode #547 — Number of Provinces (Union-Find: find() with path compression + union() by rank)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 547,
                "difficulty": null,
                "id": "w06-thu-s0-t0"
              },
              {
                "text": "Pattern: Union-Find template: int[] parent = range(0, n); int[] rank = new int[n]; find(x) with path compression; union(x, y) by rank. Count distinct roots = number of connected components.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Helm + GitOps",
            "tasks": [
              {
                "text": "Helm: package manager for K8s; Chart = set of K8s YAML templates + values.yaml; helm install, helm upgrade --install, helm rollback",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s1-t0"
              },
              {
                "text": "values.yaml: default values; override with -f custom-values.yaml or --set image.tag=1.2.3",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s1-t1"
              },
              {
                "text": "GitOps with ArgoCD: Git is the single source of truth; ArgoCD watches Git repo → syncs K8s cluster; declarative + auditable; auto-sync or manual approval",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s1-t2"
              },
              {
                "text": "Sealed Secrets: encrypt Secret resources so they can be safely committed to Git; cluster-specific encryption key",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Kubernetes Networking + Service Mesh",
            "tasks": [
              {
                "text": "CNI plugin: handles pod-to-pod networking; Calico (network policies), Flannel (simple overlay), Cilium (eBPF-based, observability)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s2-t0"
              },
              {
                "text": "NetworkPolicy: L3/L4 firewall rules for pods; default: all traffic allowed; explicit allow-list approach for production",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s2-t1"
              },
              {
                "text": "Service Mesh (Istio/Linkerd): sidecar proxy (Envoy) injected into each pod; handles mTLS, traffic management, circuit breaking, observability without code changes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s2-t2"
              },
              {
                "text": "Istio traffic management: VirtualService (routing rules, retries, timeout), DestinationRule (load balancing, circuit breaker config)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s2-t3"
              },
              {
                "text": "When to use service mesh: polyglot microservices, need mTLS everywhere, traffic shaping (canary, A/B), advanced observability",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-thu-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w06-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graphs — Topological Sort",
            "tasks": [
              {
                "text": "LeetCode #207 — Course Schedule (detect cycle in directed graph using DFS with 3 states: 0=unvisited, 1=visiting, 2=visited)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 207,
                "difficulty": null,
                "id": "w06-fri-s0-t0"
              },
              {
                "text": "Pattern: Topological sort via DFS post-order OR Kahn's algorithm (BFS with in-degree array). #207 asks if order is possible = cycle detection. State 1 (currently being visited) when re-entered = cycle.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Building Your STAR Story Bank",
            "tasks": [
              {
                "text": "Why this matters for Senior roles: behavioral rounds often count as much as technical; interviewers assess leadership, ownership, impact, collaboration",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s1-t0"
              },
              {
                "text": "STAR format: Situation (brief context, 1-2 sentences), Task (your specific responsibility), Action (what YOU did — use \"I\", not \"we\"), Result (quantifiable impact)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s1-t1"
              },
              {
                "text": "Stories to prepare (build 2 today, 1 more every Friday hereafter):",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s1-t2"
              },
              {
                "text": "Story #1: Technical leadership — a time you drove a major technical decision with business impact. Architecture choice, migration, new pattern adoption. Quantify: \"reduced P99 latency from 800ms to 120ms\", \"cut infrastructure cost by 30%\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s1-t3"
              },
              {
                "text": "Story #2: Handling conflict or disagreement — technical or interpersonal. Show you listen, find middle ground, move forward constructively.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s1-t4"
              },
              {
                "text": "Write each story in STAR format; read aloud — should take 90–120 seconds to tell",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): High-Level System Design — Review Week 1–5 HLD Content",
            "tasks": [
              {
                "text": "Re-sketch from memory: Scale from Zero architecture (load balancer, DB replicas, cache, CDN)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s2-t0"
              },
              {
                "text": "Re-draw: caching strategies comparison table (cache-aside, read-through, write-through, write-back)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s2-t1"
              },
              {
                "text": "Re-draw: Load balancing algorithms comparison",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s2-t2"
              },
              {
                "text": "Practice narrating one design aloud as if explaining to an interviewer",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s2-t3"
              },
              {
                "text": "Identify any gaps: if you can't explain any part fluently, mark it for next Sunday revision",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-fri-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w06-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graphs advanced (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #417 — Pacific Atlantic Water Flow (BFS/DFS from BOTH oceans' borders inward; intersection = answer)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 417,
                "difficulty": null,
                "id": "w06-sat-s0-t0"
              },
              {
                "text": "LeetCode #130 — Surrounded Regions (DFS/BFS from border 'O's first to mark safe; flip remaining 'O's to 'X')",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 130,
                "difficulty": null,
                "id": "w06-sat-s0-t1"
              },
              {
                "text": "LeetCode #269 — Alien Dictionary (build graph from adjacent words; topological sort; detect cycles for invalid input)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 269,
                "difficulty": null,
                "id": "w06-sat-s0-t2"
              },
              {
                "text": "Pattern: #417 — reverse thinking: instead of \"does water flow to both oceans?\", ask \"which cells can be reached going UPHILL from each ocean?\" Intersection answers the question.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t3"
              },
              {
                "text": "Functional requirements: create short URL, redirect to original, custom alias, expiry, analytics",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t4"
              },
              {
                "text": "Non-functional: 100M URLs stored, 1000 shortens/sec, 10K redirects/sec (100x read-heavy), <100ms redirect latency, 99.99% availability",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t5"
              },
              {
                "text": "Capacity: 100M URLs × 500 bytes avg = 50GB; 10K redirects/sec → read-through cache essential",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t6"
              },
              {
                "text": "API design: POST /urls {originalUrl, alias?, expiryDays} → {shortUrl, shortCode}; GET /{shortCode} → 301/302 redirect",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t7"
              },
              {
                "text": "DB: Relational (MySQL) for URL metadata; no joins needed; single-table design; sharding by shortCode if needed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t8"
              },
              {
                "text": "Code generation: encode auto-increment ID in Base62; avoid decode collisions with sequential IDs; no pre-generation needed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t9"
              },
              {
                "text": "Cache: Redis; key=shortCode, value=originalUrl; TTL=URL expiry; cache hit ~90%; LRU eviction",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t10"
              },
              {
                "text": "Analytics: async via Kafka; click event → Kafka topic → consumer writes to separate analytics DB (Cassandra or ClickHouse for time-series)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t11"
              },
              {
                "text": "Redirect type: 301 (permanent — browser caches, reduces server load) vs 302 (temporary — server always hit, better for analytics count accuracy). Prefer 302 for analytics-heavy use case.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t12"
              },
              {
                "text": "Failure scenarios: Redis down → fall through to DB; DB down → return 503; what about expired URLs?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t13"
              },
              {
                "text": "Algorithms to know deeply:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t14"
              },
              {
                "text": "Token Bucket: tokens replenish at fixed rate; burst allowed up to bucket capacity; most common, AWS/Stripe use this",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t15"
              },
              {
                "text": "Leaky Bucket: queue of requests drained at fixed rate; smooths traffic; no burst",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t16"
              },
              {
                "text": "Fixed Window Counter: counter per window; boundary burst problem (N requests at end of window + N at start of next = 2N in 1 window)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t17"
              },
              {
                "text": "Sliding Window Log: store timestamps of all requests; accurate but memory-heavy",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t18"
              },
              {
                "text": "Sliding Window Counter: approximate sliding window using two fixed window counters + weighted blend",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t19"
              },
              {
                "text": "Design: RateLimiter interface; RedisRateLimiter implementation (atomic Lua script for token bucket in Redis); LocalRateLimiter (AtomicInteger for single-node)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t20"
              },
              {
                "text": "Code: Implement Token Bucket with Semaphore and a scheduled token-refill thread; implement Redis-based sliding window counter",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t21"
              },
              {
                "text": "Where to enforce: API Gateway level (global) or per-service; per-user vs per-IP vs per-API-key",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sat-s0-t22"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w06-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #200 (Number of Islands) — use BFS this time if you used DFS before",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 200,
                "difficulty": null,
                "id": "w06-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #207 (Course Schedule) — draw the graph and trace DFS with 3 states",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 207,
                "difficulty": null,
                "id": "w06-sun-s0-t1"
              },
              {
                "text": "Q1: Kubernetes: what is the difference between liveness and readiness probe? What happens when each fails?",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t2"
              },
              {
                "text": "Q2: What is the difference between ConfigMap and Secret? What is the security limitation of Secrets by default?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t3"
              },
              {
                "text": "Q3: HPA vs KEDA — when would you choose KEDA over HPA?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t4"
              },
              {
                "text": "Q4: Explain Istio's VirtualService — what problem does it solve over standard K8s Service?",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t5"
              },
              {
                "text": "Q5: Union-Find: what is path compression and why does it improve performance?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t6"
              },
              {
                "text": "Q6: Topological sort — explain Kahn's algorithm (BFS-based). When does it detect a cycle?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t7"
              },
              {
                "text": "Read Story #1 and Story #2 aloud; time yourself; adjust to 90–120 seconds each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t8"
              },
              {
                "text": "Note: what's vague (needs more specific data), what's too long (cut the backstory)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t9"
              },
              {
                "text": "URL Shortener: key components, Base62 encoding, cache strategy, 301 vs 302 decision",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t10"
              },
              {
                "text": "Rate Limiter algorithms: Token Bucket vs Fixed Window vs Sliding Window — one-line difference",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t11"
              },
              {
                "text": "K8s networking: ClusterIP vs NodePort vs LoadBalancer vs Ingress — one-line each",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t12"
              },
              {
                "text": "Skim Monday: Consistent Hashing. Core HLD concept used in almost every distributed system design.",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w06-sun-s0-t13"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 7,
    "month": 2,
    "title": "WEEK 7: HLD Deep Dives #1 + Dynamic Programming Foundations",
    "theme": "First dedicated HLD week — design patterns that appear in EVERY distributed system. Consistent hashing, databases at scale, messaging queues. DP begins: the hardest DSA category.",
    "days": [
      {
        "dayKey": "w07-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Dynamic Programming (1D)",
            "tasks": [
              {
                "text": "LeetCode #70 — Climbing Stairs (DP: dp[i] = dp[i-1] + dp[i-2]; Fibonacci pattern)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 70,
                "difficulty": null,
                "id": "w07-mon-s0-t0"
              },
              {
                "text": "LeetCode #198 — House Robber (dp[i] = max(dp[i-1], dp[i-2] + nums[i]))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 198,
                "difficulty": null,
                "id": "w07-mon-s0-t1"
              },
              {
                "text": "Pattern: DP = identify what state you need, define the recurrence, establish base cases, compute bottom-up. For both: you only need last 2 values → O(1) space optimization.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Consistent Hashing",
            "tasks": [
              {
                "text": "Problem: with N servers, hash(key) % N breaks when N changes — all keys remap",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s1-t0"
              },
              {
                "text": "Solution: hash both servers and keys onto a ring (0 to 2^32); each key maps to the first server clockwise; adding/removing server only affects adjacent keys",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s1-t1"
              },
              {
                "text": "Virtual nodes: each server has K virtual nodes on the ring; balances load when servers have different capacities; reduces hot spots",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s1-t2"
              },
              {
                "text": "Used in: Amazon DynamoDB, Apache Cassandra, Redis Cluster, CDN server selection",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s1-t3"
              },
              {
                "text": "Interview drawing: draw a ring with 3 servers + 3 virtual nodes each; add 4th server; show which keys remap",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Database Scaling Patterns",
            "tasks": [
              {
                "text": "Replication: primary-replica (read replicas); replication lag (replica may be milliseconds behind — eventual consistency for reads); use primary for reads requiring freshness",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s2-t0"
              },
              {
                "text": "Sharding: horizontal partitioning; shard by userId, by geography, by hash; cross-shard queries are painful; consistent hashing for shard assignment",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s2-t1"
              },
              {
                "text": "Indexes: B-tree (range queries, equality); Hash index (equality only, faster); Composite index (leftmost prefix rule: index on (a,b,c) supports queries on a, (a,b), (a,b,c) but NOT (b,c))",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s2-t2"
              },
              {
                "text": "CQRS: Command Query Responsibility Segregation; separate write model (Command) from read model (Query); read model can be denormalized for performance; sync via events or CDC",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-mon-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w07-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP 1D harder",
            "tasks": [
              {
                "text": "LeetCode #322 — Coin Change (unbounded knapsack: dp[amount] = min of dp[amount - coin] + 1 for all coins; initialize to infinity)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 322,
                "difficulty": null,
                "id": "w07-tue-s0-t0"
              },
              {
                "text": "Pattern: This is the foundational unbounded knapsack DP. dp[0] = 0 as base case. Process bottom-up: for each amount, try each coin. When you finish, dp[amount] is the answer (infinity means impossible).",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Kafka vs RabbitMQ vs Azure Service Bus",
            "tasks": [
              {
                "text": "Kafka: log-based; durable; replayed; high throughput; consumer manages offset; best for event streaming, audit log, decoupling",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s1-t0"
              },
              {
                "text": "RabbitMQ: queue-based; message deleted after ack; routing with exchanges (direct, topic, fanout, headers); best for task queues, RPC patterns",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s1-t1"
              },
              {
                "text": "Azure Service Bus: managed enterprise queue; sessions for ordering, dead-letter, transactions; simpler ops overhead than self-hosted Kafka",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s1-t2"
              },
              {
                "text": "Key distinction: Kafka retains messages (consumers can reprocess); RabbitMQ/SB deletes after successful consumption",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s1-t3"
              },
              {
                "text": "When to use which: audit trail / replay / analytics → Kafka; task distribution / RPC / ordered processing → RabbitMQ / Service Bus",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Event-Driven Architecture Patterns",
            "tasks": [
              {
                "text": "Event Sourcing: store events, not current state; reconstruct current state by replaying event log; append-only; natural audit log; complex querying (need projection/read model)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s2-t0"
              },
              {
                "text": "Saga Pattern: distributed transaction across microservices; Choreography-based (each service reacts to events, publishes next event); Orchestration-based (central coordinator calls each service)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s2-t1"
              },
              {
                "text": "Outbox Pattern: write domain event to DB outbox table in same transaction as business data; polling publisher or CDC (Debezium) publishes to Kafka — guarantees exactly-once publishing",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s2-t2"
              },
              {
                "text": "Change Data Capture (CDC): Debezium reads database transaction log (binlog for MySQL, WAL for Postgres); publishes row changes as Kafka events; zero application code change needed",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-tue-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w07-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP 2D Introduction",
            "tasks": [
              {
                "text": "LeetCode #62 — Unique Paths (dp[i][j] = dp[i-1][j] + dp[i][j-1]; base case: first row and column = 1)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 62,
                "difficulty": null,
                "id": "w07-wed-s0-t0"
              },
              {
                "text": "Pattern: First 2D DP. State: (row, col). Transitions: come from top or left. Base case: left edge and top edge all = 1. Space optimize: use 1D dp array, overwrite left-to-right.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t1"
              },
              {
                "text": "Functional requirements: crawl the web starting from seed URLs, download and index page content, follow links, handle duplicates",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t2"
              },
              {
                "text": "Non-functional: crawl 1 billion pages/month (~400 pages/sec), politeness (robots.txt, crawl-delay), fault tolerant, distributed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t3"
              },
              {
                "text": "Components: URL Frontier (priority queue of URLs to crawl), Fetcher (HTTP downloader), Parser (extract links, content), DNS Resolver (cache), Duplicate Detector (Bloom filter for URLs), Content Store (distributed storage), Index Store",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t4"
              },
              {
                "text": "Bloom filter: probabilistic data structure; false positives possible (say \"seen\" when not seen); false negatives impossible; space-efficient; use for URL deduplication",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t5"
              },
              {
                "text": "Politeness: respect robots.txt; per-domain crawl delay (don't hammer a single domain); rotate User-Agent; back-off on 429 response",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t6"
              },
              {
                "text": "Architecture: distributed workers; each worker pulls from URL Frontier; publishes extracted URLs back to Frontier queue; separate Frontier partitioned by domain (politeness)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t7"
              },
              {
                "text": "Failure handling: worker crash → URL returns to Frontier after timeout; idempotent design",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t8"
              },
              {
                "text": "Draw the full component diagram during the session",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-wed-s0-t9"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w07-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP 2D",
            "tasks": [
              {
                "text": "LeetCode #1143 — Longest Common Subsequence (dp[i][j] = dp[i-1][j-1]+1 if chars match, else max(dp[i-1][j], dp[i][j-1]))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1143,
                "difficulty": null,
                "id": "w07-thu-s0-t0"
              },
              {
                "text": "Pattern: LCS is THE foundational 2D DP. When chars match: take diagonal + 1. When they don't: take max of up or left. Fill the table left-to-right, top-to-bottom. No tricks — just the recurrence.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t1"
              },
              {
                "text": "Functional: send push notifications, SMS, email via multiple providers; user preferences; scheduled notifications; failure retry",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t2"
              },
              {
                "text": "Non-functional: 10M notifications/day, low latency for priority notifications, at-least-once delivery, dedup",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t3"
              },
              {
                "text": "Components: API layer (receive notification request), Queue (Kafka — decouple producers from senders), Worker (pull from queue, call provider), Provider (APNs/FCM for push, Twilio for SMS, SendGrid for email), User Preference Store, Retry Queue, DLT",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t4"
              },
              {
                "text": "Provider abstraction: NotificationSender interface; PushSender, SmsSender, EmailSender implementations; Strategy pattern",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t5"
              },
              {
                "text": "Retry: exponential backoff; max 3 retries; after exhaustion → DLT → alert operations team; never silently drop",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t6"
              },
              {
                "text": "Deduplication: idempotency key in each notification; check Redis before sending; store \"sent\" with TTL=24h",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t7"
              },
              {
                "text": "Scheduling: store future notifications in DB with scheduledAt; separate scheduler service polls and enqueues them at the right time",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t8"
              },
              {
                "text": "Draw the component diagram: producer → Kafka → worker → provider; retry path",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-thu-s0-t9"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w07-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP — Knapsack",
            "tasks": [
              {
                "text": "LeetCode #416 — Partition Equal Subset Sum (0/1 knapsack: can we reach exactly sum/2? dp[j] = dp[j] || dp[j-num])",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 416,
                "difficulty": null,
                "id": "w07-fri-s0-t0"
              },
              {
                "text": "Pattern: This is 0/1 knapsack framed as a boolean reachability problem. Traverse items outer loop, amounts inner loop BACKWARDS (to prevent reuse). Classic interview problem.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): STAR Stories #3 and #4",
            "tasks": [
              {
                "text": "Story #3: Mentoring/coaching a junior or cross-functional collaboration. Show you multiply team impact, not just individual output. Quantify: \"reduced their PR review cycle from 3 days to same-day\", \"helped team adopt TDD which cut regression bugs by 40%\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s1-t0"
              },
              {
                "text": "Story #4: A time you failed or made a mistake. What happened, what did you own, what did you do, what did you learn. Interviewers listen for self-awareness and growth mindset — not perfection.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s1-t1"
              },
              {
                "text": "Write both in STAR format; practice aloud; time each to 90–120 seconds",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): HLD — Review and Gap Fill",
            "tasks": [
              {
                "text": "Re-sketch URL Shortener from memory (no notes); narrate as you draw",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s2-t0"
              },
              {
                "text": "Re-sketch Notification System; narrate the Kafka retry + DLT path",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s2-t1"
              },
              {
                "text": "Identify which component you hesitated on → that's your focus for Sunday revision",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-fri-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w07-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP medium (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #300 — Longest Increasing Subsequence (O(n²) DP: dp[i] = max(dp[j]+1) for j < i where nums[j] < nums[i]; or O(n log n) with patience sorting — know both)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 300,
                "difficulty": null,
                "id": "w07-sat-s0-t0"
              },
              {
                "text": "LeetCode #518 — Coin Change II (count ways; unbounded knapsack: dp[j] += dp[j-coin])",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 518,
                "difficulty": null,
                "id": "w07-sat-s0-t1"
              },
              {
                "text": "LeetCode #97 — Interleaving String (2D DP: dp[i][j] = whether s1[0..i-1] + s2[0..j-1] = s3[0..i+j-1])",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 97,
                "difficulty": null,
                "id": "w07-sat-s0-t2"
              },
              {
                "text": "Pattern: LCS difference from LIS: LCS is about two sequences; LIS is about one sequence with monotonically increasing constraint. Don't confuse them.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t3"
              },
              {
                "text": "Requirements: put(key, value), get(key), delete(key); horizontal scalability, high availability, strong or eventual consistency option",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t4"
              },
              {
                "text": "Core engine: in-memory hash table + Write-Ahead Log (WAL) for durability; periodic snapshots (AOF vs RDB in Redis terms)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t5"
              },
              {
                "text": "Partitioning: consistent hashing to distribute keys across nodes; virtual nodes for balance",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t6"
              },
              {
                "text": "Replication: leader-based (one leader, N replicas); quorum reads/writes (W + R > N for strong consistency; e.g., N=3, W=2, R=2)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t7"
              },
              {
                "text": "Vector clocks / Versioning: handle concurrent writes in leaderless systems (DynamoDB style); conflict resolution at read time (last-write-wins or application-level merge)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t8"
              },
              {
                "text": "LSM Tree vs B-Tree: LSM (write-optimized: sequential writes to memtable → SSTable on disk; compaction in background); B-Tree (read-optimized: in-place updates); Cassandra/RocksDB use LSM",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t9"
              },
              {
                "text": "Bloom filter per SSTable: before checking disk, check Bloom filter — if key \"not present\", skip that SSTable entirely (false positive possible, false negative impossible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t10"
              },
              {
                "text": "Gossip protocol: nodes share state with random peers; eventually all nodes converge; no single point of failure for cluster membership",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t11"
              },
              {
                "text": "Requirements: schedule one-time and recurring jobs, priority, retry, monitoring, deduplication",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t12"
              },
              {
                "text": "Classes: TaskScheduler, Task (id, type, payload, scheduledAt, priority, maxRetries, status), TaskRepository, TaskWorker, RetryPolicy, TaskListener",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t13"
              },
              {
                "text": "Priority queue: PriorityBlockingQueue sorted by scheduledAt + priority",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t14"
              },
              {
                "text": "Recurring jobs: CRON expression parser; calculate nextRunAt after each execution; requeue with same CRON",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t15"
              },
              {
                "text": "Retry: exponential backoff with jitter; after maxRetries → move to DLQ; @Retryable(include=TransientException.class)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t16"
              },
              {
                "text": "Deduplication: unique constraint on (taskType, deduplicationKey); INSERT ON CONFLICT DO NOTHING; return existing task",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t17"
              },
              {
                "text": "Code: TaskWorker.run() in loop: poll task, execute, update status; handle exception → increment retryCount or move to DLQ; TaskScheduler.schedule(task) → validate → save to DB → optionally enqueue immediately",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sat-s0-t18"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w07-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #322 (Coin Change) — trace through coins=[1,2,5], amount=11 with the DP table",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 322,
                "difficulty": null,
                "id": "w07-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #1143 (LCS) — fill the DP table for \"abcde\" and \"ace\"",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1143,
                "difficulty": null,
                "id": "w07-sun-s0-t1"
              },
              {
                "text": "Q1: Consistent Hashing — how does adding a new node affect which keys need to remap? What role do virtual nodes play?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t2"
              },
              {
                "text": "Q2: Event Sourcing vs CQRS — are they the same? When would you use them together?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t3"
              },
              {
                "text": "Q3: What is the Outbox Pattern and what specific problem does it solve?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t4"
              },
              {
                "text": "Q4: Saga Choreography vs Orchestration — name a scenario where each is preferable.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t5"
              },
              {
                "text": "Q5: In a Key-Value Store, what is the difference between LSM Tree and B-Tree storage engines?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t6"
              },
              {
                "text": "Q6: What is a Bloom filter? Can it produce false negatives?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t7"
              },
              {
                "text": "Read all 4 stories aloud; cut any story over 2 minutes; refine the Result section for all — should have numbers",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t8"
              },
              {
                "text": "Ask yourself for each: \"Would a senior interviewer know exactly what I personally contributed?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t9"
              },
              {
                "text": "Consistent Hashing: problem it solves, ring concept, virtual nodes, who uses it",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t10"
              },
              {
                "text": "DB Scaling: replication vs sharding, CQRS concept",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t11"
              },
              {
                "text": "LSM Tree vs B-Tree: one-line difference, which systems use which",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t12"
              },
              {
                "text": "Bloom filter: false positive/negative rules, where it's used",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t13"
              },
              {
                "text": "Skim Monday: SQL optimization — query plans, indexes, EXPLAIN output reading",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w07-sun-s0-t14"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 8,
    "month": 2,
    "title": "WEEK 8: SQL + Databases Advanced + HLD Deep Dives #2 + DP Harder",
    "theme": "SQL query optimization, indexing strategies, NoSQL data modeling, and two more HLD designs. DP graph patterns introduced.",
    "days": [
      {
        "dayKey": "w08-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP on Strings",
            "tasks": [
              {
                "text": "LeetCode #72 — Edit Distance (dp[i][j] = min edits to convert s1[0..i] to s2[0..j])",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 72,
                "difficulty": null,
                "id": "w08-mon-s0-t0"
              },
              {
                "text": "Pattern: When chars match: dp[i-1][j-1] (no edit needed). When chars differ: 1 + min(dp[i-1][j] insert, dp[i][j-1] delete, dp[i-1][j-1] replace). This is one of the most elegant 2D DPs. Trace \"horse\" → \"ros\" manually.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Index Internals + Strategy",
            "tasks": [
              {
                "text": "B-Tree index: logarithmic lookup; supports =, <, >, BETWEEN, LIKE 'prefix%'; stored sorted",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s1-t0"
              },
              {
                "text": "Hash index: O(1) equality only; no range queries; InnoDB doesn't have explicit hash indexes (uses adaptive hash index internally)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s1-t1"
              },
              {
                "text": "Composite index: (last_name, first_name, age) — supports: last_name alone, last_name+first_name, all three; NOT first_name alone or age alone (leftmost prefix rule)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s1-t2"
              },
              {
                "text": "Covering index: query can be satisfied entirely from index (no table lookup); SELECT first_name, last_name FROM users WHERE last_name = 'Smith' uses covering index (last_name, first_name)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s1-t3"
              },
              {
                "text": "Index on expression: CREATE INDEX idx_lower_email ON users(LOWER(email)); needed when using function in WHERE clause",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s1-t4"
              },
              {
                "text": "When indexes hurt: write-heavy tables (every write must update all indexes); low-cardinality columns (gender with 2 values — index useless); over-indexing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): EXPLAIN Plan Reading",
            "tasks": [
              {
                "text": "EXPLAIN SELECT ... — read execution plan",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s2-t0"
              },
              {
                "text": "Key output columns: type (ALL = full table scan, index, range, ref, eq_ref, const — const is best), rows (estimated rows scanned), key (index used or NULL), Extra (Using where, Using index, Using filesort, Using temporary)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s2-t1"
              },
              {
                "text": "Common red flags: type=ALL on a large table (missing index), Using filesort (ORDER BY not using index), Using temporary (GROUP BY creating temp table)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s2-t2"
              },
              {
                "text": "Write 5 slow queries on a users/orders/products schema; use EXPLAIN to identify the issue; add the right index; verify with EXPLAIN again",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s2-t3"
              },
              {
                "text": "Query tuning checklist: WHERE columns indexed? JOIN columns indexed? Are you selecting only needed columns? Can you push conditions down? Is LIMIT applied early?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-mon-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w08-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP Graph",
            "tasks": [
              {
                "text": "LeetCode #139 — Word Break (DP: dp[i] = true if s[0..i-1] can be formed from dictionary; for each j < i: dp[j] && dictionary.contains(s[j..i-1]))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 139,
                "difficulty": null,
                "id": "w08-tue-s0-t0"
              },
              {
                "text": "Pattern: This is DP over string positions — essentially a DAG where each node is a position and edges are valid words. Recognize this as \"DP with string as input\" not just 2D grid.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Window Functions",
            "tasks": [
              {
                "text": "ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC): assigns row numbers per department sorted by salary",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t0"
              },
              {
                "text": "RANK() (ties get same rank, next rank skips) vs DENSE_RANK() (ties get same rank, next rank is consecutive) — know the difference",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t1"
              },
              {
                "text": "LAG(salary, 1) OVER (PARTITION BY dept ORDER BY hire_date): access previous row's salary in the window",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t2"
              },
              {
                "text": "LEAD(salary, 1) OVER (...): access next row's salary",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t3"
              },
              {
                "text": "SUM(salary) OVER (PARTITION BY dept): aggregation without collapsing rows",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t4"
              },
              {
                "text": "NTILE(4) OVER (ORDER BY salary): divide into 4 buckets (quartiles)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t5"
              },
              {
                "text": "Interview classic: \"Find the 2nd highest salary per department\" → ROW_NUMBER() + WHERE rn = 2",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s1-t6"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): CTEs + Recursive Queries + UPSERT",
            "tasks": [
              {
                "text": "CTE (WITH clause): named subquery; readable; not materialized by default in most DBs; useful for multi-step transformations",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s2-t0"
              },
              {
                "text": "Recursive CTE: WITH RECURSIVE cte AS (base case UNION ALL recursive case); use for hierarchical data (org charts, bill of materials, tree structures)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s2-t1"
              },
              {
                "text": "UPSERT: INSERT ... ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name (PostgreSQL); INSERT ... ON DUPLICATE KEY UPDATE (MySQL)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s2-t2"
              },
              {
                "text": "Transactions with savepoints: SAVEPOINT sp1; ROLLBACK TO sp1 (partial rollback within a transaction)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s2-t3"
              },
              {
                "text": "Code: Write a recursive CTE to find all employees under a manager at any depth; write an UPSERT for a session tracking table",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-tue-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w08-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP harder",
            "tasks": [
              {
                "text": "LeetCode #152 — Maximum Product Subarray (track both maxProduct and minProduct at each position — negative × negative = large positive)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 152,
                "difficulty": null,
                "id": "w08-wed-s0-t0"
              },
              {
                "text": "Pattern: This breaks the standard \"only track max\" DP pattern. Because negatives flip sign, you must track the running minimum too. At each position: new_max = max(nums[i], maxProd*nums[i], minProd*nums[i]); same for new_min.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Cassandra Data Modeling",
            "tasks": [
              {
                "text": "Cassandra is write-optimized; schema designed around query patterns (unlike relational schema designed around data)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t0"
              },
              {
                "text": "Partition key: determines which node stores the row; all data for same partition key is co-located; HOT partition = problem",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t1"
              },
              {
                "text": "Clustering key: sort order within a partition; allows range queries on clustering columns within a partition",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t2"
              },
              {
                "text": "Design rule: one table per query pattern; denormalization is intentional and expected",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t3"
              },
              {
                "text": "Example: messages by conversation — PRIMARY KEY ((conversation_id), sent_at) — partition by conversation, sort by time",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t4"
              },
              {
                "text": "Anti-patterns: ALLOW FILTERING (full cluster scan), large partitions (>100MB), secondary indexes on high-cardinality columns",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t5"
              },
              {
                "text": "Tombstones: deletes create tombstones; too many tombstones → read performance degrades; use TTL instead of manual delete where possible",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s1-t6"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): MongoDB Document Model + Redis Data Structures",
            "tasks": [
              {
                "text": "MongoDB: BSON document store; flexible schema; embed (one-to-few, read together) vs reference (one-to-many, independently accessed); indexes on embedded fields",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s2-t0"
              },
              {
                "text": "Aggregation pipeline: $match → $group → $project → $sort → $limit; equivalent to SQL SELECT + WHERE + GROUP BY + ORDER BY",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s2-t1"
              },
              {
                "text": "Transactions in MongoDB (v4+): multi-document ACID; use sparingly — expensive; design to avoid them with embedding",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s2-t2"
              },
              {
                "text": "Redis data structures: String (SET/GET), List (LPUSH/RPOP — queue), Set (SADD/SMEMBERS — unique values), Sorted Set (ZADD score member — leaderboard), Hash (HSET — object fields), Bitmap, HyperLogLog (cardinality estimation), Streams (Kafka-like)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s2-t3"
              },
              {
                "text": "Redis use cases: cache, session store, rate limiter (INCR + EXPIRE), distributed lock (SET key val NX EX timeout + Redlock), pub/sub, leaderboard (Sorted Set), deduplication (Set with TTL)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-wed-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w08-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP on Trees",
            "tasks": [
              {
                "text": "LeetCode #337 — House Robber III (DFS returning (robbed, skipped) pair for each node; avoid re-computation)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 337,
                "difficulty": null,
                "id": "w08-thu-s0-t0"
              },
              {
                "text": "Pattern: Tree DP = return tuple from DFS. At each node: rob = node.val + skip(left) + skip(right); skip = max(rob(left), skip(left)) + max(rob(right), skip(right)). No memo needed — clean recursion on trees.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t1"
              },
              {
                "text": "Functional: rider requests ride, match to nearest available driver, real-time tracking, ETA, payment",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t2"
              },
              {
                "text": "Non-functional: millions of concurrent users, 10ms driver location update, low-latency matching, high availability",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t3"
              },
              {
                "text": "Location service: drivers send GPS ping every 5 seconds; store in Redis GeoHash (GEOADD/GEORADIUS); not relational DB — too many writes per second",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t4"
              },
              {
                "text": "Matching: GEORADIUS to find drivers within N km; rank by ETA (consider traffic, not just distance); assign and notify",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t5"
              },
              {
                "text": "Ride state machine: REQUESTED → DRIVER_ASSIGNED → DRIVER_ARRIVED → IN_PROGRESS → COMPLETED / CANCELLED",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t6"
              },
              {
                "text": "Real-time tracking: WebSocket (bidirectional, persistent) for driver location push to rider; HTTP long-polling as fallback",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t7"
              },
              {
                "text": "Surge pricing: supply/demand ratio per geo-zone; pre-computed at zone level (hexagonal grid); update every 1–5 minutes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t8"
              },
              {
                "text": "Notifications: Kafka for ride events → Notification Service → push via FCM/APNs",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t9"
              },
              {
                "text": "Payment: Saga pattern — charge card → release driver payment → update records; idempotency key per ride",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-thu-s0-t10"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w08-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP practice",
            "tasks": [
              {
                "text": "LeetCode #309 — Best Time to Buy and Sell Stock with Cooldown (DP with states: hold, sold, cooldown)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 309,
                "difficulty": null,
                "id": "w08-fri-s0-t0"
              },
              {
                "text": "Pattern: State machine DP. Three states at each day: hold (max(prev_hold, cooldown-buy)), sold (prev_hold+price), cooldown (max(prev_cooldown, prev_sold)). Trace through [1,2,3,0,2].",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): STAR Stories",
            "tasks": [
              {
                "text": "Story #5: A time you dealt with a critical production incident. Show calm under pressure, structured debugging, communication, post-mortem. Quantify: downtime duration, users affected, SLA impact, what you did to prevent recurrence.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s1-t0"
              },
              {
                "text": "Story #6: A time you improved a process or system beyond your immediate responsibility. Proactive ownership. Shows staff-level thinking — you don't wait to be asked.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s1-t1"
              },
              {
                "text": "Write + practice both aloud; time to 90–120 seconds each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): HLD Pattern Review",
            "tasks": [
              {
                "text": "Draw and narrate from memory: Kafka-based Notification System (component diagram)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s2-t0"
              },
              {
                "text": "Draw and narrate from memory: Ride-Sharing location tracking (Redis GeoHash path)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s2-t1"
              },
              {
                "text": "Practice the \"state machine\" approach to ride status — interviewers like to see you think about edge cases (driver cancels after arriving, payment fails, GPS signal lost)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-fri-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w08-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DP hardest tier (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #312 — Burst Balloons (interval DP: dp[i][j] = max coins from bursting balloons between i and j; try each k as last to burst)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 312,
                "difficulty": null,
                "id": "w08-sat-s0-t0"
              },
              {
                "text": "LeetCode #329 — Longest Increasing Path in Matrix (DFS + memoization on grid; no visited array needed because we only go to strictly larger cells)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 329,
                "difficulty": null,
                "id": "w08-sat-s0-t1"
              },
              {
                "text": "LeetCode #10 — Regular Expression Matching (DP: handle '.' matching any char, '*' matching 0 or more of preceding)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 10,
                "difficulty": null,
                "id": "w08-sat-s0-t2"
              },
              {
                "text": "Pattern: Interval DP (#312) is a distinct DP category — think backwards (which was the LAST balloon to burst?). This is counter-intuitive but correct. Trace [3,1,5,8] manually.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t3"
              },
              {
                "text": "Requirements: distributed cache; O(1) get/set; TTL expiry; eviction; replication for HA; horizontal scaling",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t4"
              },
              {
                "text": "Data partitioning: consistent hashing across cache nodes; virtual nodes; client-side partitioning vs proxy-based (Twemproxy) vs cluster (Redis Cluster)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t5"
              },
              {
                "text": "Redis Cluster: 16384 hash slots; each node owns a range of slots; CLUSTER INFO; MOVED redirection when client routes to wrong node; client libraries handle this transparently",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t6"
              },
              {
                "text": "Replication: each primary has one or more replicas; Sentinel (Redis < Cluster) for failover; Cluster handles failover natively",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t7"
              },
              {
                "text": "Cache eviction policies: noeviction (return error when full — bad for cache), allkeys-lru (evict any key LRU — good for cache), volatile-lru (evict keys with TTL set by LRU), allkeys-lfu (Java 17 Caffeine default equivalent)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t8"
              },
              {
                "text": "Write strategies: write-through (write DB + cache together), write-behind (cache only, async DB), cache-aside (app manages cache on miss)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t9"
              },
              {
                "text": "Thundering herd: many requests miss cache simultaneously (after cache expiry); solutions: lock (only one fetches, others wait), jitter (randomize TTL so not all expire together), background refresh before expiry",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t10"
              },
              {
                "text": "Code sketch: CacheService.get(key) → Redis hit return; miss → DB → cache → return; CacheService.invalidate(key) on write",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t11"
              },
              {
                "text": "Requirements: produce message, consume message, consumer groups, offset management, persistence",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t12"
              },
              {
                "text": "Classes: Topic, Partition (ordered log), Segment (file segment of partition), Producer, Consumer, ConsumerGroup, OffsetStore, Broker",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t13"
              },
              {
                "text": "Partition: ArrayList or on-disk file of messages; messages are append-only; each message has an offset (index)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t14"
              },
              {
                "text": "Consumer Group: each partition assigned to one consumer in the group; if consumers > partitions, some consumers idle",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t15"
              },
              {
                "text": "Offset: stored per (groupId, topicId, partitionId); consumer tracks what it has processed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t16"
              },
              {
                "text": "Persistence: write to SegmentFile (sequential disk write — fast); index file (offset → byte position); mmap for fast reads",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t17"
              },
              {
                "text": "Code: Topic.publish(message) → select partition by key hash → Partition.append(message) → return offset; Consumer.poll() → fetch messages after lastCommittedOffset → process → commitOffset(offset)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sat-s0-t18"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w08-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #72 (Edit Distance) — fill the DP table for \"intention\" → \"execution\" (5×5 portion)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 72,
                "difficulty": null,
                "id": "w08-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #312 (Burst Balloons) — trace through [3,1,5,8] with the interval DP",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 312,
                "difficulty": null,
                "id": "w08-sun-s0-t1"
              },
              {
                "text": "Q1: Composite index leftmost prefix rule — which queries use index (a,b,c)? Give 3 examples that do and 2 that don't.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t2"
              },
              {
                "text": "Q2: Window function: how does RANK() differ from DENSE_RANK()? Give an example with ties.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t3"
              },
              {
                "text": "Q3: Cassandra partition key vs clustering key — what does each control?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t4"
              },
              {
                "text": "Q4: Redis GeoHash — how does GEORADIUS work? What data structure underlies it?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t5"
              },
              {
                "text": "Q5: Thundering herd problem in caching — explain the problem and 2 solutions.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t6"
              },
              {
                "text": "Q6: In Interval DP, why do you think about which element was last removed (not first)?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t7"
              },
              {
                "text": "Read all 6 stories aloud in one sitting (should take ~12 minutes total)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t8"
              },
              {
                "text": "Score each: 1 (weak — vague or no data) / 2 (ok) / 3 (strong — specific + quantified + clear personal contribution)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t9"
              },
              {
                "text": "Rewrite any score-1 story today",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t10"
              },
              {
                "text": "SQL index types: B-Tree vs Hash; composite index rule; covering index; EXPLAIN red flags",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t11"
              },
              {
                "text": "Cassandra: partition key, clustering key, design rule (query-first)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t12"
              },
              {
                "text": "Redis data structures + use cases (one-liner per structure)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t13"
              },
              {
                "text": "Distributed cache: eviction policies, thundering herd solutions, write strategies",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t14"
              },
              {
                "text": "Skim Monday: Heap data structure and when it appears in interview problems",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w08-sun-s0-t15"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 9,
    "month": 3,
    "title": "WEEK 9: Heaps + Tries + Advanced HLD Designs",
    "theme": "Heap problems are extremely common in senior interviews (Top-K, Merge K Sorted, Median Finder). Tries round out the DSA picture. Two more HLD designs. STAR bank complete.",
    "days": [
      {
        "dayKey": "w09-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Heaps",
            "tasks": [
              {
                "text": "LeetCode #703 — Kth Largest Element in a Stream (min-heap of size K; always return heap.peek())",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 703,
                "difficulty": null,
                "id": "w09-mon-s0-t0"
              },
              {
                "text": "LeetCode #1046 — Last Stone Weight (max-heap: repeatedly smash two heaviest)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1046,
                "difficulty": null,
                "id": "w09-mon-s0-t1"
              },
              {
                "text": "Pattern: Min-heap of size K for Kth-Largest problems — counterintuitive but correct. The Kth largest is always at the top of a min-heap of size K. When size > K, poll (remove smallest). Smallest remaining = Kth largest overall.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Core Components + Upload Path",
            "tasks": [
              {
                "text": "Functional: upload photo, follow users, view feed (posts from followed users, chronological or ranked), like/comment",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s1-t0"
              },
              {
                "text": "Upload flow: client → API server → CDN upload URL (pre-signed S3 URL); client uploads directly to S3/Azure Blob; API records metadata only; CDN distributes images",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s1-t1"
              },
              {
                "text": "Why pre-signed URL: reduces load on API servers; S3/Blob handles upload bandwidth; enables resumable upload",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s1-t2"
              },
              {
                "text": "Metadata DB: posts table (postId, userId, s3Key, caption, createdAt); follows table (followerId, followingId); likes table; comments table",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s1-t3"
              },
              {
                "text": "Media storage: object storage (S3/Azure Blob) for images and videos; CDN in front for edge caching; never store binary in DB",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Feed Generation Strategies",
            "tasks": [
              {
                "text": "Fan-out on write (push): when user posts → immediately write post to all followers' feed cache (Redis List); feed read is instant; expensive for users with millions of followers (1M followers = 1M cache writes)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s2-t0"
              },
              {
                "text": "Fan-out on read (pull): read time — fetch followed users' posts, merge, sort; no pre-computation; expensive at read time for users following many people",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s2-t1"
              },
              {
                "text": "Hybrid: fan-out on write for normal users; fan-out on read for celebrity accounts (>10K followers); merge in application layer on feed request",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s2-t2"
              },
              {
                "text": "Feed ranking: ML model considering: recency, engagement rate, relationship closeness (mutual follows), content type preferences",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-mon-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w09-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Heaps",
            "tasks": [
              {
                "text": "LeetCode #23 — Merge K Sorted Lists (min-heap of size K; each heap element = (node.val, node); poll min, push node.next)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 23,
                "difficulty": null,
                "id": "w09-tue-s0-t0"
              },
              {
                "text": "Pattern: Merge K sorted = K-way merge with min-heap. O(N log K) where N = total elements, K = number of lists. Key: always push the NEXT element from the same list as the popped element.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Data Collection + Storage",
            "tasks": [
              {
                "text": "Functional: as user types, suggest top-N completions; rank by search frequency",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s1-t0"
              },
              {
                "text": "Data source: query log (every search logged with timestamp + userId); batch pipeline to aggregate top queries per prefix",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s1-t1"
              },
              {
                "text": "Offline aggregation: Hadoop/Spark job runs hourly/daily; count query frequency per prefix; output top-10 per prefix",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s1-t2"
              },
              {
                "text": "Storage for prefix→suggestions: Trie (memory-efficient, fast prefix lookup) or DB table (prefix varchar, suggestions json, frequency int)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s1-t3"
              },
              {
                "text": "Trie at scale: one giant trie won't fit in memory for web-scale; shard by first 2 characters of prefix",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Real-Time Serving + Caching",
            "tasks": [
              {
                "text": "API: GET /autocomplete?q=java → {\"suggestions\": [\"java interview\", \"java 21\", \"java streams\"]}",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s2-t0"
              },
              {
                "text": "Cache aggressively: most popular prefixes change slowly; Redis cache with 10-minute TTL; cache top 1000 prefixes in application memory (LRU)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s2-t1"
              },
              {
                "text": "Real-time data: recent trending searches (last 1 hour) blended with historical frequencies; separate fast pipeline (Kafka + stream processor) for trending",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s2-t2"
              },
              {
                "text": "Update mechanism: full trie rebuild daily from batch job; incremental updates for trending; deploy to all servers via shared cache",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-tue-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w09-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Heaps",
            "tasks": [
              {
                "text": "LeetCode #295 — Find Median from Data Stream (two heaps: maxHeap for lower half, minHeap for upper half; balance sizes; median = average of tops if even, top of larger if odd)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 295,
                "difficulty": null,
                "id": "w09-wed-s0-t0"
              },
              {
                "text": "Pattern: The two-heap solution for running median is a classic senior interview question. The invariant to maintain: maxHeap.size() == minHeap.size() ± 1, AND maxHeap.peek() <= minHeap.peek(). Trace adding [5,3,8,4] step by step.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Architecture + Tweet Storage",
            "tasks": [
              {
                "text": "Scale: 500M DAU, 500K tweets/sec, 28B tweet reads/day (~300K reads/sec); read:write = ~600:1",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s1-t0"
              },
              {
                "text": "Tweet storage: tweets table in MySQL sharded by tweetId; tweetId = snowflake ID (time + machineId + sequence — globally unique, time-sortable)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s1-t1"
              },
              {
                "text": "Snowflake ID: 64-bit: 41 bits timestamp (milliseconds), 10 bits machine ID, 12 bits sequence; allows 4096 IDs/millisecond per machine; no coordination needed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s1-t2"
              },
              {
                "text": "User timeline (own tweets): sorted by tweetId DESC; straightforward shard lookup",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s1-t3"
              },
              {
                "text": "Home timeline (followed users' tweets): the hard part",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w09-wed-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Home Timeline — Fan-out Architecture",
            "tasks": [
              {
                "text": "Fan-out on write: post tweet → enqueue fan-out job → write tweetId to all followers' timeline cache (Redis Sorted Set, score=tweetId)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s2-t0"
              },
              {
                "text": "Fan-out on read: home timeline request → get all followed user IDs → parallel fetch their timelines → merge-sort → return top N",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s2-t1"
              },
              {
                "text": "Twitter's actual approach: hybrid; fan-out on write for regular users; fan-out on read for celebrities; timeline cache holds ~800 tweet IDs per user",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s2-t2"
              },
              {
                "text": "Timeline cache: Redis Sorted Set; score = tweet timestamp; ZREVRANGE for chronological feed; expire after 30 days inactivity",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s2-t3"
              },
              {
                "text": "Timeline delivery via WebSocket or long-polling for real-time new tweet notifications",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-wed-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w09-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Tries",
            "tasks": [
              {
                "text": "LeetCode #208 — Implement Trie (Prefix Tree) (TrieNode with children[26] array or HashMap<Char, TrieNode>, isEndOfWord boolean)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 208,
                "difficulty": null,
                "id": "w09-thu-s0-t0"
              },
              {
                "text": "Pattern: Trie = 26-ary tree where each path from root to isEndOfWord=true node spells a word. insert: create nodes as needed; search: traverse, return false if node missing or !isEndOfWord; startsWith: traverse, return false if node missing (don't check isEndOfWord).",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Payment Flow + Idempotency",
            "tasks": [
              {
                "text": "Functional: user pays for order, refunds, payment history, multiple payment methods",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s1-t0"
              },
              {
                "text": "Flow: User → Payment Service → Payment Gateway (Stripe/Razorpay) → Bank; Payment Service coordinates; never store raw card data (PCI-DSS compliance)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s1-t1"
              },
              {
                "text": "Idempotency: every payment attempt has idempotencyKey (UUID generated by client); store in DB; if retry arrives with same key → return original result; prevents double-charge",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s1-t2"
              },
              {
                "text": "Payment states: PENDING → PROCESSING → COMPLETED / FAILED / REFUNDED; state transitions are append-only (event log)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s1-t3"
              },
              {
                "text": "Ledger: double-entry bookkeeping; every transaction = debit one account + credit another; immutable; used for reconciliation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Saga Pattern for Payment + Reconciliation",
            "tasks": [
              {
                "text": "Distributed transaction: create order → reserve inventory → charge payment → confirm all; if payment fails → release inventory + cancel order",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s2-t0"
              },
              {
                "text": "Saga (orchestration): PaymentOrchestratorService manages the flow; calls each service; on failure, calls compensating transactions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s2-t1"
              },
              {
                "text": "Compensating transaction: reverse the previous step; must be idempotent; log compensation attempt",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s2-t2"
              },
              {
                "text": "Reconciliation: daily batch job compares Payment Service records with payment gateway records; flag discrepancies; auto-resolve or alert ops team",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s2-t3"
              },
              {
                "text": "At rest encryption: encrypt sensitive fields (last 4 of card, bank account number) before storing; AES-256-GCM; key stored in Key Vault (not in application config)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-thu-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w09-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Tries",
            "tasks": [
              {
                "text": "LeetCode #212 — Word Search II (Trie + DFS on grid; build Trie from wordList; DFS from each cell; prune when no Trie node match)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 212,
                "difficulty": null,
                "id": "w09-fri-s0-t0"
              },
              {
                "text": "Pattern: Using a Trie during grid DFS is the key insight — instead of checking every word from every cell (O(words * cells * 4^maxLen)), build the Trie once and prune search space drastically.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): STAR Stories #7 and #8",
            "tasks": [
              {
                "text": "Story #7: A time you influenced a technical decision you didn't own. Cross-team, cross-functional influence. Shows staff-level communication and persuasion skills.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s1-t0"
              },
              {
                "text": "Story #8: A time you significantly improved system performance or reliability. Specific: which metric, by how much, what you did (profiling, identifying bottleneck, implementing fix, validating). Quantify everything.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s1-t1"
              },
              {
                "text": "Write both; practice aloud; bank now has 8 stories",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): STAR Bank Complete Review",
            "tasks": [
              {
                "text": "Read all 8 stories in sequence; time total (should be ~16 minutes)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s2-t0"
              },
              {
                "text": "Map each story to likely interview question: \"Tell me about a time you...\" → leadership, conflict, failure, mentoring, proactive, incident, influence, performance",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s2-t1"
              },
              {
                "text": "Identify gaps: do you have something for \"why do you want to leave?\" / \"why this company?\" / \"what's your biggest weakness?\" — prepare brief honest answers for these",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-fri-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w09-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Heaps + Tries advanced (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #347 — Top K Frequent Words (min-heap sorted by frequency + lexicographic for ties)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 347,
                "difficulty": null,
                "id": "w09-sat-s0-t0"
              },
              {
                "text": "LeetCode #621 — Task Scheduler (greedy: count frequencies; idle slots determined by most frequent task; formula: max(n*(maxFreq-1)+countOfMaxFreq, tasks.length))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 621,
                "difficulty": null,
                "id": "w09-sat-s0-t1"
              },
              {
                "text": "LeetCode #745 — Prefix and Suffix Search (design; Trie or HashMap with composite keys)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 745,
                "difficulty": null,
                "id": "w09-sat-s0-t2"
              },
              {
                "text": "Pattern: #621 is a pure math problem dressed as a scheduling problem. The key insight is that the answer is determined by the most frequent task. Don't simulate — derive the formula.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Ingestion + Processing",
            "tasks": [
              {
                "text": "Ingest: broadcaster streams via RTMP → Ingest Server → Media Server for transcoding; transcode to multiple resolutions (1080p, 720p, 480p, 360p)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s1-t0"
              },
              {
                "text": "Transcoding: compute-intensive; distribute across worker pool; HLS (HTTP Live Streaming) or DASH for adaptive bitrate streaming",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s1-t1"
              },
              {
                "text": "HLS: split stream into 6-10 second .ts segments; generate .m3u8 playlist; client picks best quality based on available bandwidth",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Delivery + Chat + Scale",
            "tasks": [
              {
                "text": "CDN distribution: push .ts segments to CDN edge servers; worldwide low latency; origin shield to reduce CDN → origin requests",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t0"
              },
              {
                "text": "Live chat: WebSocket for bidirectional messaging; Kafka for chat event bus (decouple chat from stream); Redis Pub/Sub for fan-out to WebSocket servers",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t1"
              },
              {
                "text": "Scale: 1M concurrent viewers; viewers pull from CDN (not origin); CDN handles the traffic; origin servers handle broadcaster ingestion only",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t2"
              },
              {
                "text": "Viewer count: HyperLogLog in Redis for approximate unique count; exact count is expensive and unnecessary",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t3"
              },
              {
                "text": "Pick any HLD from Weeks 6–9 that you're least confident in",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t4"
              },
              {
                "text": "Set a 45-minute timer; draw + narrate the entire design without notes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t5"
              },
              {
                "text": "After timer: review your design for: capacity estimates done? API defined? DB schema? Cache layer? Async paths? Failure scenarios?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t6"
              },
              {
                "text": "Repeat with a LLD from Weeks 1–5 for remaining 30 minutes",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sat-s2-t7"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w09-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #295 (Median from Stream) — trace adding [5,3,8,4] through both heaps step by step",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 295,
                "difficulty": null,
                "id": "w09-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #208 (Implement Trie) — code from scratch, no reference",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 208,
                "difficulty": null,
                "id": "w09-sun-s0-t1"
              },
              {
                "text": "Q1: Two-heap approach for median: what invariant must you maintain? What happens when you add an even-positioned element?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t2"
              },
              {
                "text": "Q2: Snowflake ID — what are its 3 components and what property makes it time-sortable?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t3"
              },
              {
                "text": "Q3: Fan-out on write vs fan-out on read — when would you choose each for a social feed?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t4"
              },
              {
                "text": "Q4: What is the Saga pattern? Choreography vs Orchestration — give a specific scenario for each.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t5"
              },
              {
                "text": "Q5: How does HLS (HTTP Live Streaming) work? Why is it well-suited for CDN delivery?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t6"
              },
              {
                "text": "Q6: What is double-entry bookkeeping in a payment ledger? Why is it append-only?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t7"
              },
              {
                "text": "In 30 minutes, rapidly sketch (just boxes + arrows, no detail) all 11 HLD designs from memory",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t8"
              },
              {
                "text": "If you can't draw a box-and-arrow diagram of any design in < 2 minutes, that's your weakest area — flag it",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t9"
              },
              {
                "text": "K8s objects: Pod, Deployment, Service, Ingress, ConfigMap, Secret, HPA, StatefulSet — one-liner each",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t10"
              },
              {
                "text": "Kafka: partitions, consumer groups, offset strategies, Outbox Pattern",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t11"
              },
              {
                "text": "HLD patterns: fan-out on write vs read, consistent hashing, event sourcing, Saga",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t12"
              },
              {
                "text": "SQL: B-tree index, composite index rule, EXPLAIN red flags, window functions (ROW_NUMBER, RANK, LAG)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t13"
              },
              {
                "text": "Week 10 is the Buffer/Catch-Up week. No new content is added. Review what you have.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w09-sun-s0-t14"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 10,
    "month": 3,
    "title": "WEEK 10: 🛡️ Buffer / Catch-Up Week (No New Content)",
    "theme": "",
    "days": [
      {
        "dayKey": "w10-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Look at your cheat sheets from Weeks 1–9. For every row you can't explain fluently → revisit that day's notes.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-mon-s0-t0"
              },
              {
                "text": "Prioritize areas where your Sunday quiz answers were weakest.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-mon-s0-t1"
              },
              {
                "text": "Suggested re-study priority order (most common in senior interviews):",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-mon-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w10-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Look at your cheat sheets from Weeks 1–9. For every row you can't explain fluently → revisit that day's notes.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-tue-s0-t0"
              },
              {
                "text": "Prioritize areas where your Sunday quiz answers were weakest.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-tue-s0-t1"
              },
              {
                "text": "Suggested re-study priority order (most common in senior interviews):",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-tue-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w10-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Look at your cheat sheets from Weeks 1–9. For every row you can't explain fluently → revisit that day's notes.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-wed-s0-t0"
              },
              {
                "text": "Prioritize areas where your Sunday quiz answers were weakest.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-wed-s0-t1"
              },
              {
                "text": "Suggested re-study priority order (most common in senior interviews):",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-wed-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w10-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Choose 3 random LeetCode problems (one easy, one medium, one medium-hard) from topics covered in Weeks 1–9",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w10-thu-s0-t0"
              },
              {
                "text": "Set 20-minute timer per problem; after timer: review your solution's time + space complexity; compare with optimal",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-thu-s0-t1"
              },
              {
                "text": "DSA problem types to randomly sample from: Two Pointers, Sliding Window, HashMap, Binary Search, Stack, BFS/DFS, DP (1D), Heaps",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-thu-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w10-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "30 minutes each: rapid sketch from scratch (no notes)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-fri-s0-t0"
              },
              {
                "text": "Design a URL Shortener → sketch in 30 min",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-fri-s0-t1"
              },
              {
                "text": "Design a Notification System → sketch in 30 min",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-fri-s0-t2"
              },
              {
                "text": "Design a Rate Limiter → sketch in 30 min",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-fri-s0-t3"
              },
              {
                "text": "Design a Task Scheduler → sketch in 30 min",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-fri-s0-t4"
              },
              {
                "text": "After each: identify 1 thing you missed (failure scenario, capacity estimate, async path)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-fri-s0-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w10-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "LLD from memory",
            "tasks": [
              {
                "text": "35 min: Design Parking Lot from scratch (just code skeleton + pattern decisions)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s0-t0"
              },
              {
                "text": "35 min: Design Library Management System from scratch",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s0-t1"
              }
            ]
          },
          {
            "title": "DSA timed sprint",
            "tasks": [
              {
                "text": "6 problems × 15 min each; mix of all categories from Weeks 1–9",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s1-t0"
              },
              {
                "text": "Score yourself: solved correctly and cleanly = 2pts; solved with bugs = 1pt; didn't finish = 0pt",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s1-t1"
              },
              {
                "text": "Target: 8+/12 points",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s1-t2"
              }
            ]
          },
          {
            "title": "Interview simulation",
            "tasks": [
              {
                "text": "Find a study buddy or record yourself",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s2-t0"
              },
              {
                "text": "45-min mock technical interview: 1 DSA problem + 1 system design question; simulate real interview conditions (no Google, no IDE)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s2-t1"
              },
              {
                "text": "Remaining 30 min: debrief — what went well, what was unclear in your explanation, which part took too long",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sat-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w10-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "All 8 stories out loud; time each; do any need sharpening?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t0"
              },
              {
                "text": "Prepare 2 new answers if needed: \"Why are you looking to move?\" + \"Where do you see yourself in 3 years?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t1"
              },
              {
                "text": "Merge all 9 weekly cheat sheets into one 2-page master cheat sheet",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t2"
              },
              {
                "text": "Categories: Java (Core, Concurrency, JVM), Spring Boot, Kafka, K8s, DSA Patterns, HLD Patterns, LLD Patterns, SQL",
                "tags": [
                  "Concurrency",
                  "HLD",
                  "K8s",
                  "Kafka",
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t3"
              },
              {
                "text": "This master sheet is your final revision document for Months 3–4",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t4"
              },
              {
                "text": "Skim Week 11 Monday: Advanced Spring Security",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t5"
              },
              {
                "text": "Write down: which company types you're targeting? product startup, MNC, FAANG-adjacent?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t6"
              },
              {
                "text": "What is your target compensation range?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t7"
              },
              {
                "text": "Which role: senior engineer, tech lead, staff engineer?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t8"
              },
              {
                "text": "This drives how to weight Weeks 11–16 (deep LLD for startups, HLD + behavioral for FAANG-adjacent, Spring depth for MNC Java shops)",
                "tags": [
                  "HLD",
                  "LLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w10-sun-s0-t9"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 11,
    "month": 3,
    "title": "WEEK 11: Spring Security + OAuth2 + Advanced Java Performance",
    "theme": "",
    "days": [
      {
        "dayKey": "w11-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Greedy",
            "tasks": [
              {
                "text": "LeetCode #55 — Jump Game (greedy: track max reachable index; if current index > max reachable, return false)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 55,
                "difficulty": null,
                "id": "w11-mon-s0-t0"
              },
              {
                "text": "LeetCode #45 — Jump Game II (greedy: track current range end and next range end; jump count increments when you exhaust current range)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 45,
                "difficulty": null,
                "id": "w11-mon-s0-t1"
              },
              {
                "text": "Pattern: Greedy interval coverage. For Jump Game II: think in terms of \"levels\" like BFS. Each level is the range reachable from the previous jump.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Spring Security Architecture",
            "tasks": [
              {
                "text": "Filter chain: SecurityFilterChain; each request passes through filters in order; UsernamePasswordAuthenticationFilter, JwtAuthenticationFilter (custom), ExceptionTranslationFilter, FilterSecurityInterceptor",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s1-t0"
              },
              {
                "text": "Authentication flow: filter extracts credentials → AuthenticationManager → AuthenticationProvider → UserDetailsService.loadUserByUsername() → compare passwords → SecurityContextHolder.setAuthentication()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s1-t1"
              },
              {
                "text": "SecurityContextHolder: ThreadLocal-based; cleared after request; propagate to child threads with MODE_INHERITABLETHREADLOCAL",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s1-t2"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): JWT Authentication Implementation",
            "tasks": [
              {
                "text": "JWT structure: header.payload.signature; sign with HS256 (secret) or RS256 (private key, verify with public key); never store sensitive data in payload (it's base64-decoded, not encrypted)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s2-t0"
              },
              {
                "text": "Implementation: JwtFilter extends OncePerRequestFilter; extract Bearer token from Authorization header; validate signature + expiry; set Authentication in SecurityContextHolder",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s2-t1"
              },
              {
                "text": "Refresh token: short-lived access token (15 min) + long-lived refresh token (7 days stored in HTTP-only cookie or DB); refresh endpoint issues new access token",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s2-t2"
              },
              {
                "text": "Token revocation: JWTs are stateless — can't revoke; workaround: token blacklist in Redis (check on each request); or use short TTL + refresh rotation",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s2-t3"
              },
              {
                "text": "Code: Implement JwtUtil (generate, validate, extract claims) + JwtFilter + SecurityConfig with JWT filter before UsernamePasswordAuthenticationFilter",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-mon-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w11-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Intervals",
            "tasks": [
              {
                "text": "LeetCode #56 — Merge Intervals (sort by start; if current start <= prev end → merge; else add previous, start new)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 56,
                "difficulty": null,
                "id": "w11-tue-s0-t0"
              },
              {
                "text": "Pattern: Always sort by start time first for interval problems. Merge condition: intervals overlap if current.start <= prev.end. Update end to max(prev.end, current.end).",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): OAuth2 + OIDC",
            "tasks": [
              {
                "text": "OAuth2 roles: Resource Owner (user), Client (your app), Authorization Server (Google/Okta/Keycloak), Resource Server (your API)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s1-t0"
              },
              {
                "text": "Authorization Code Flow with PKCE: client redirects user → auth server → user logs in → auth server returns code → client exchanges code for token → client calls API with token",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s1-t1"
              },
              {
                "text": "Why PKCE: prevents code interception attacks in public clients (mobile/SPA); code verifier + challenge",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s1-t2"
              },
              {
                "text": "Spring Boot: spring-boot-starter-oauth2-resource-server; @EnableWebSecurity + .oauth2ResourceServer().jwt(); validate issuer + audience claims",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s1-t3"
              },
              {
                "text": "Keycloak/Okta as auth server: configure realm, client, scopes; Spring Boot trusts tokens issued by configured issuer",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): RBAC + Method Security",
            "tasks": [
              {
                "text": "@PreAuthorize(\"hasRole('ADMIN')\"), @PostAuthorize(\"returnObject.userId == authentication.name\")",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s2-t0"
              },
              {
                "text": "@Secured (older, role-based only), @RolesAllowed (JSR-250, same as @Secured)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s2-t1"
              },
              {
                "text": "Method security: @EnableMethodSecurity enables @PreAuthorize at method level; works with Spring AOP proxy; self-invocation problem applies here too",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s2-t2"
              },
              {
                "text": "Custom permission evaluator: PermissionEvaluator interface; @PreAuthorize(\"hasPermission(#orderId, 'Order', 'READ')\") → custom logic to check if user can access that specific order",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s2-t3"
              },
              {
                "text": "CORS: @CrossOrigin or CorsConfigurationSource bean; allow specific origins, methods, headers; credentials: true requires explicit origin (not wildcard)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-tue-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w11-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Intervals",
            "tasks": [
              {
                "text": "LeetCode #435 — Non-overlapping Intervals (greedy: sort by end time; always keep interval ending earliest to leave room for next; count removals)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 435,
                "difficulty": null,
                "id": "w11-wed-s0-t0"
              },
              {
                "text": "Pattern: Greedy interval scheduling — sort by END time (not start). Greedy choice: always keep the interval that ends earliest — maximizes room for future intervals. This is the Activity Selection Problem.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): JVM Performance Profiling",
            "tasks": [
              {
                "text": "JFR (Java Flight Recorder): low-overhead continuous profiling built into JVM; record CPU, GC, allocations, latency events; enable: -XX:StartFlightRecording=duration=60s,filename=recording.jfr",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s1-t0"
              },
              {
                "text": "JMC (Java Mission Control): analyse JFR recordings; flame graphs; method profiling; GC activity; blocked threads",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s1-t1"
              },
              {
                "text": "Allocation profiling: find which code paths allocate the most; reduce object creation in hot paths; prefer object pooling for expensive objects (DB connections, thread pools already pooled)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s1-t2"
              },
              {
                "text": "String intern, char[] reuse, byte buffer pooling (Netty, Kafka do this)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s1-t3"
              },
              {
                "text": "Code hot paths: identify with profiling first, then optimize; premature optimization = avoid; always measure before and after",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Connection Pools + Thread Pool Tuning",
            "tasks": [
              {
                "text": "HikariCP: fastest JDBC connection pool; maximumPoolSize = (CPU cores * 2) + 1 for I/O-bound; connectionTimeout (wait to get connection), idleTimeout (return idle connection to pool), maxLifetime (recycle connections to prevent DB-side timeout)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s2-t0"
              },
              {
                "text": "Thread pool sizing: I/O-bound = higher thread count (threads spend time waiting); CPU-bound = CPU cores or cores+1; use performance testing to validate — theory is a starting point",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s2-t1"
              },
              {
                "text": "Async patterns: don't block virtual threads / platform threads during I/O; use non-blocking I/O (WebFlux/Netty) for high-concurrency I/O-bound services",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s2-t2"
              },
              {
                "text": "Monitoring: HikariCP MBean metrics (active, idle, pending, total); expose via Micrometer/Prometheus; alert when pending > 0 for > 5 seconds",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-wed-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w11-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Greedy / Intervals",
            "tasks": [
              {
                "text": "LeetCode #253 — Meeting Rooms II (greedy: sort by start; min-heap of meeting end times; if current.start >= heap.peek() → reuse room; else add new room)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 253,
                "difficulty": null,
                "id": "w11-thu-s0-t0"
              },
              {
                "text": "Pattern: \"Minimum resources needed\" problems → sort + min-heap of end times. Heap size at end = answer. Trace [[0,30],[5,10],[15,20]] manually.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Observability Pillars",
            "tasks": [
              {
                "text": "Metrics: numerical measurements over time; RED metrics: Rate (requests/sec), Errors (error rate), Duration (latency p50/p90/p99); USE: Utilization, Saturation, Errors (for infrastructure)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s1-t0"
              },
              {
                "text": "Logs: structured logging (JSON); log levels (ERROR, WARN, INFO, DEBUG, TRACE); correlation ID in MDC: MDC.put(\"traceId\", traceId); include in all log statements; log aggregation (ELK, Splunk, Loki)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s1-t1"
              },
              {
                "text": "Traces: distributed request tracing; trace ID propagated across services (HTTP headers: X-B3-TraceId or W3C Trace-Context); span = single operation within a trace",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s1-t2"
              },
              {
                "text": "Correlation: use the same traceId in metrics (labels), logs (MDC), and traces — correlate all three for a request during debugging",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Micrometer + Spring Boot 3 Tracing",
            "tasks": [
              {
                "text": "Micrometer Tracing (Spring Boot 3): integrates with Brave (Zipkin) or OpenTelemetry; auto-instruments HTTP requests, Kafka, JDBC",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s2-t0"
              },
              {
                "text": "@Observed annotation (Spring Boot 3.2+): wraps method with trace span + metrics automatically",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s2-t1"
              },
              {
                "text": "Custom spans: Tracer.nextSpan().name(\"payment-processing\").tag(\"orderId\", orderId).start()",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s2-t2"
              },
              {
                "text": "Distributed trace context propagation: Spring Boot auto-propagates traceId/spanId via RestTemplate, WebClient, Feign, Kafka headers",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s2-t3"
              },
              {
                "text": "Alert strategy: SLO (Service Level Objective) based alerting; alert when p99 > threshold or error rate > x%; not on CPU usage alone",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-thu-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w11-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Two more Greedy",
            "tasks": [
              {
                "text": "LeetCode #134 — Gas Station (greedy: if total gas >= total cost, solution exists; start from the point where running total goes most negative)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 134,
                "difficulty": null,
                "id": "w11-fri-s0-t0"
              },
              {
                "text": "LeetCode #763 — Partition Labels (frequency map of last occurrence of each char; extend current partition to max last occurrence of any char seen so far)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 763,
                "difficulty": null,
                "id": "w11-fri-s0-t1"
              },
              {
                "text": "Pattern: #763 is greedy interval merging without explicit sorting — track the \"reach\" of the current partition and extend as needed.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Resume Update",
            "tasks": [
              {
                "text": "Format: max 2 pages; reverse chronological; each role: Company, Title, Dates, Location + 4–6 bullet points",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s1-t0"
              },
              {
                "text": "Bullet point formula: Action verb + what you did + with what technology + measurable outcome",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s1-t1"
              },
              {
                "text": "Bad: \"Worked on backend services using Spring Boot\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s1-t2"
              },
              {
                "text": "Good: \"Designed and implemented a distributed rate limiter using Redis Token Bucket algorithm, reducing API abuse incidents by 85% and enabling SLA enforcement for 3 enterprise customers\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s1-t3"
              },
              {
                "text": "Add a \"Technical Skills\" section: group by category (Languages: Java 8–21; Frameworks: Spring Boot, Quarkus; Messaging: Kafka; Containers: Docker, Kubernetes, OpenShift; Cloud: Azure; Databases: MySQL, PostgreSQL, MongoDB, Redis, Cassandra)",
                "tags": [
                  "K8s",
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s1-t4"
              },
              {
                "text": "Remove: \"Responsible for...\" (passive), \"Assisted with...\" (junior), \"Worked on...\" (vague), anything without an outcome",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s1-t5"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): LinkedIn + STAR Bank Final Polish",
            "tasks": [
              {
                "text": "LinkedIn: update \"About\" section to highlight your target role and core strengths; Headline = current role + key strength + target signal; Skills: add all from resume and get endorsements; \"Open to Work\" setting (visible to recruiters only, not public)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s2-t0"
              },
              {
                "text": "STAR bank final read: all 8 stories × 90 seconds = 12 minutes; trim any that run over; make sure each story ends with a clear, quantified result",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s2-t1"
              },
              {
                "text": "Prepare company-specific angle: for MNCs → emphasize scale, reliability, process; for startups → emphasize ownership, speed, shipping; for product companies → emphasize user impact and metrics",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-fri-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w11-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Greedy + Intervals timed sprint (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #1851 — Minimum Interval to Include Each Query (sort intervals and queries; sweep with min-heap of (size, right) for active intervals)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1851,
                "difficulty": null,
                "id": "w11-sat-s0-t0"
              },
              {
                "text": "LeetCode #1029 — Two City Scheduling (sort by cost difference; send first half to city A, second half to city B)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1029,
                "difficulty": null,
                "id": "w11-sat-s0-t1"
              },
              {
                "text": "LeetCode #452 — Minimum Number of Arrows to Burst Balloons (sort by right end; arrow at current interval's right end; advance arrow to next interval's right end when non-overlapping)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 452,
                "difficulty": null,
                "id": "w11-sat-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Event-Driven within Spring Boot",
            "tasks": [
              {
                "text": "ApplicationEvent + ApplicationEventPublisher.publishEvent(event): in-memory synchronous dispatch by default",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s1-t0"
              },
              {
                "text": "@EventListener(OrderCreatedEvent.class): handles the event; @Async + @EventListener: asynchronous (requires @EnableAsync)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s1-t1"
              },
              {
                "text": "TransactionalEventListener: binds event publishing to transaction phase; AFTER_COMMIT ensures event only published if transaction commits; prevents saga inconsistencies",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s1-t2"
              },
              {
                "text": "@TransactionalEventListener(phase=AFTER_COMMIT): publish Kafka event after DB commit (safe Outbox alternative for in-VM events)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring Boot 3 + GraalVM Native + Modulith",
            "tasks": [
              {
                "text": "GraalVM Native Image: AOT compilation to native binary; instant startup (ms vs seconds); low memory; no JIT warmup; limitations: reflection must be declared, not all libraries compatible",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t0"
              },
              {
                "text": "Spring Native (spring-boot-starter): auto-generates GraalVM config for Spring beans; most Spring/Spring Data libraries supported in Spring Boot 3",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t1"
              },
              {
                "text": "When to use: serverless functions (AWS Lambda, Azure Functions), CLI tools, K8s sidecar containers",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t2"
              },
              {
                "text": "Spring Modulith: modular monolith; enforces module boundaries at compile time; internal packages not accessible across modules; event-driven cross-module communication via ApplicationEvents; maps to eventual microservice boundaries",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t3"
              },
              {
                "text": "Code: Define two Spring Modulith modules (Order, Payment); communicate via OrderCompletedEvent published by Order module, handled by Payment module",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t4"
              },
              {
                "text": "45 minutes DSA: one medium problem (interviewer role: time the candidate, give hints after 10 min if stuck)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Medium",
                "id": "w11-sat-s2-t5"
              },
              {
                "text": "30 minutes HLD: design one system from Weeks 6–9 list (pick at random)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t6"
              },
              {
                "text": "Debrief: rate yourself on (a) correct solution, (b) communicated approach before coding, (c) handled edge cases, (d) analysed complexity, (e) asked clarifying questions before HLD design",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sat-s2-t7"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w11-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #253 (Meeting Rooms II) — trace [[0,30],[5,10],[15,20]] through min-heap",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 253,
                "difficulty": null,
                "id": "w11-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #56 (Merge Intervals) — trace [[1,3],[2,6],[8,10],[15,18]]",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 56,
                "difficulty": null,
                "id": "w11-sun-s0-t1"
              },
              {
                "text": "Q1: Explain the OAuth2 Authorization Code Flow with PKCE. Why is PKCE needed?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t2"
              },
              {
                "text": "Q2: JWT: why can't you revoke a JWT? What are two workarounds?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t3"
              },
              {
                "text": "Q3: Spring Security self-invocation problem with method security — what causes it and how to fix?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t4"
              },
              {
                "text": "Q4: What is the difference between @PreAuthorize and @PostAuthorize?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t5"
              },
              {
                "text": "Q5: What are RED metrics? Apply them to a payment service — what would you monitor?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t6"
              },
              {
                "text": "Q6: What is MDC? How does it help with distributed tracing in a microservice?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t7"
              },
              {
                "text": "Rewrite the solution to the mock interview DSA problem cleanly (any code written under pressure needs a clean re-write)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t8"
              },
              {
                "text": "For the HLD: identify the one component you explained poorly; write a clear 2-paragraph explanation of that component",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t9"
              },
              {
                "text": "JWT: structure, validation, refresh token flow, revocation options",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t10"
              },
              {
                "text": "OAuth2: 4 roles, Authorization Code + PKCE flow steps",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t11"
              },
              {
                "text": "Spring Security filter chain: key filters in order",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t12"
              },
              {
                "text": "Observability: Metrics (RED), Logs (structured + MDC), Traces (traceId propagation) — the three pillars",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t13"
              },
              {
                "text": "Skim Monday: Distributed transactions + saga in depth",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w11-sun-s0-t14"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 12,
    "month": 3,
    "title": "WEEK 12: Advanced Distributed Systems + Mock Interviews + Concurrency Revision",
    "theme": "",
    "days": [
      {
        "dayKey": "w12-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Linked Lists",
            "tasks": [
              {
                "text": "LeetCode #141 — Linked List Cycle (Floyd's fast/slow pointer — tortoise and hare)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 141,
                "difficulty": null,
                "id": "w12-mon-s0-t0"
              },
              {
                "text": "LeetCode #142 — Linked List Cycle II (find start of cycle: after collision, reset slow to head; advance both one step at a time; they meet at cycle start)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 142,
                "difficulty": null,
                "id": "w12-mon-s0-t1"
              },
              {
                "text": "Pattern: Cycle detection + find cycle start is a standard interview problem. The math behind why they meet at the start: distance from head to cycle start = distance from collision point to cycle start. Trust the math.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): CAP Theorem + PACELC",
            "tasks": [
              {
                "text": "CAP: Consistency (all nodes see same data), Availability (every request gets a response), Partition Tolerance (system works despite network splits)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s1-t0"
              },
              {
                "text": "In presence of a network partition: you must choose C or A; partition tolerance is non-negotiable in distributed systems",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s1-t1"
              },
              {
                "text": "CP systems: consistent under partition, may reject requests (Zookeeper, HBase, etcd); right choice when correctness matters (financial data, seat allocation)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s1-t2"
              },
              {
                "text": "AP systems: available under partition, may return stale data (DynamoDB in eventual mode, Cassandra); right choice when availability matters more than perfect consistency",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s1-t3"
              },
              {
                "text": "PACELC: extends CAP; even without partitions: latency vs consistency tradeoff; PACELC gives a more complete picture for system design",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Consistency Models",
            "tasks": [
              {
                "text": "Strong consistency: reads always return latest write; requires coordination; expensive; Zookeeper, etcd",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s2-t0"
              },
              {
                "text": "Eventual consistency: all replicas converge eventually; high availability; Cassandra, DynamoDB",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s2-t1"
              },
              {
                "text": "Read-your-writes: you always see your own writes; sticky routing or primary reads; important for user-facing APIs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s2-t2"
              },
              {
                "text": "Monotonic read: if you've seen version V, you won't see an older version; achieved by reading from same replica; session consistency",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s2-t3"
              },
              {
                "text": "Linearizability vs Serializability: Linearizability = single-object, real-time ordering; Serializability = multi-object transactions, history equivalent to some serial order; Strict Serializability = both",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-mon-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w12-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Linked Lists",
            "tasks": [
              {
                "text": "LeetCode #19 — Remove Nth Node From End (two pointers: advance fast pointer N steps first; then advance both; slow.next is the node to remove)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 19,
                "difficulty": null,
                "id": "w12-tue-s0-t0"
              },
              {
                "text": "LeetCode #148 — Sort List (merge sort on linked list; find mid with slow/fast pointer; split, sort each half, merge)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 148,
                "difficulty": null,
                "id": "w12-tue-s0-t1"
              },
              {
                "text": "Pattern: #148 teaches merge sort on linked list — O(n log n) time, O(log n) space (recursion stack). The fast/slow pointer for finding the midpoint is the key primitive.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Distributed Locking",
            "tasks": [
              {
                "text": "Redis single-node lock: SET key value NX EX timeout; NX = only if not exists; EX = expiry prevents lock held forever if client crashes; release: check value matches before DEL (prevents releasing other client's lock)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s1-t0"
              },
              {
                "text": "Redlock: multi-node Redis lock; acquire lock on majority (⌊N/2⌋ + 1 of N Redis instances); if acquired majority within validity time → lock held; more complex, debated by Martin Kleppmann — know the controversy",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s1-t1"
              },
              {
                "text": "ZooKeeper distributed lock: create ephemeral sequential znode; smallest numbered znode holds lock; watch predecessor for release; ZK ephemeral znodes auto-deleted on session expiry",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s1-t2"
              },
              {
                "text": "When to use: avoid if possible (complicates systems); prefer idempotent design + optimistic locking; use distributed lock for non-idempotent single-instance operations",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Leader Election + Consensus",
            "tasks": [
              {
                "text": "Need: one coordinator among N nodes (scheduler, Kafka controller, primary election)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s2-t0"
              },
              {
                "text": "ZooKeeper: all nodes try to create same ephemeral znode; only one succeeds → becomes leader; others watch the znode; if leader crashes → znode deleted → re-election",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s2-t1"
              },
              {
                "text": "Raft consensus: leader election + log replication; terms; candidates request votes; wins if majority votes received; leader replicates log to followers; commit when majority acknowledge",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s2-t2"
              },
              {
                "text": "Used in: etcd (K8s datastore), CockroachDB, TiKV use Raft; ZooKeeper uses ZAB (similar to Paxos); Kafka KRaft (ZooKeeper replacement) uses Raft",
                "tags": [
                  "K8s",
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s2-t3"
              },
              {
                "text": "ETCD in K8s: all cluster state stored in etcd; all control plane reads/writes go through etcd; quorum = majority of etcd nodes must be healthy for K8s to function",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-tue-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w12-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Linked Lists Advanced",
            "tasks": [
              {
                "text": "LeetCode #25 — Reverse Nodes in K-Group (reverse each group of k nodes; tricky: track group start and next-group connector)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 25,
                "difficulty": null,
                "id": "w12-wed-s0-t0"
              },
              {
                "text": "Pattern: This is the hardest standard linked list problem. Break it into: (1) check if k nodes remain; (2) reverse k nodes; (3) connect reversed group to previous tail and to the next group recursively. Trace k=2, list=1→2→3→4 carefully.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Full Mock Interview #2",
            "tasks": [
              {
                "text": "45 min: DSA problem (medium-hard: tree or graph problem); no IDE; write on paper or whiteboard; communicate approach first",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w12-wed-s1-t0"
              },
              {
                "text": "45 min: HLD: design one system you haven't practiced in the last 2 weeks",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-wed-s1-t1"
              },
              {
                "text": "Debrief immediately: timing (too slow / too fast?), communication (silent coding is bad), edge cases (did you consider null, empty, overflow?), design choices (did you justify your DB choice?)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-wed-s1-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w12-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Bit Manipulation",
            "tasks": [
              {
                "text": "LeetCode #191 — Number of 1 Bits (n & (n-1) clears the lowest set bit; count iterations until n=0)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 191,
                "difficulty": null,
                "id": "w12-thu-s0-t0"
              },
              {
                "text": "LeetCode #338 — Counting Bits (DP: bits[i] = bits[i >> 1] + (i & 1))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 338,
                "difficulty": null,
                "id": "w12-thu-s0-t1"
              },
              {
                "text": "Pattern: n & (n-1) is the fundamental bit trick — removes lowest set bit. bits[i] = bits[i/2] + last bit is the DP formulation. Know both.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Two-Phase Commit (2PC)",
            "tasks": [
              {
                "text": "Phase 1 Prepare: coordinator sends PREPARE to all participants; each votes YES (writes to WAL, holds locks) or NO",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s1-t0"
              },
              {
                "text": "Phase 2 Commit/Abort: if all vote YES → coordinator sends COMMIT; if any NO → sends ABORT",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s1-t1"
              },
              {
                "text": "Problems: coordinator single point of failure; participants block holding locks during network partition waiting for coordinator decision; not suitable for microservices (tight coupling, blocking)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s1-t2"
              },
              {
                "text": "3PC: adds an additional pre-commit phase; reduces blocking but introduces new failure scenarios; rarely used in practice",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s1-t3"
              },
              {
                "text": "When used: XA transactions (cross-DB transactions); JDBC drivers support XA; Spring @Transactional(JTA) for multi-DB commits; avoid in microservices",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): BASE Properties + Eventual Consistency Patterns",
            "tasks": [
              {
                "text": "BASE: Basically Available, Soft state, Eventually consistent; alternative to ACID for distributed systems",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s2-t0"
              },
              {
                "text": "CRDT (Conflict-free Replicated Data Type): data structures that can be merged without conflicts; G-Counter (grow-only), PN-Counter, OR-Set; used in Riak, Redis CRDT mode, collaborative editing (like Google Docs)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s2-t1"
              },
              {
                "text": "Read repair: during a read, compare responses from multiple replicas; if stale data found → update the stale replica; passive consistency improvement",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s2-t2"
              },
              {
                "text": "Hinted handoff: when a node is unavailable, writes are temporarily stored by another node (hint); when unavailable node recovers, hints are replayed; Cassandra uses this",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s2-t3"
              },
              {
                "text": "Anti-entropy: background process comparing replicas and syncing differences; Merkle trees for efficient diff detection (compare tree hashes to find divergence)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-thu-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w12-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Bit Manipulation",
            "tasks": [
              {
                "text": "LeetCode #268 — Missing Number (XOR all indices 0..n with all values; XORs cancel for matches; remaining = missing number)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 268,
                "difficulty": null,
                "id": "w12-fri-s0-t0"
              },
              {
                "text": "LeetCode #371 — Sum of Two Integers Without + Operator (a ^ b = sum without carry; (a & b) << 1 = carry; repeat until no carry)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 371,
                "difficulty": null,
                "id": "w12-fri-s0-t1"
              },
              {
                "text": "Pattern: XOR for finding unpaired/missing elements. XOR of same numbers = 0. XOR with 0 = original. These properties enable elegant solutions.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s0-t2"
              }
            ]
          },
          {
            "title": "Part 1 (45 min): Behavioral Round Simulation",
            "tasks": [
              {
                "text": "Pick 5 random questions from this list and answer each in STAR format (< 2 min each):",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t0"
              },
              {
                "text": "Tell me about a time you disagreed with a technical decision made by your team.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t1"
              },
              {
                "text": "Describe a situation where you had to learn a new technology quickly to solve a problem.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t2"
              },
              {
                "text": "Tell me about the most complex system you've designed or worked on.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t3"
              },
              {
                "text": "Give me an example of when you mentored someone and what the outcome was.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t4"
              },
              {
                "text": "Tell me about a time a project you led failed or didn't go as planned.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t5"
              },
              {
                "text": "Self-grade after each: was it specific? did it have a result? was it about YOU or the team?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s1-t6"
              }
            ]
          },
          {
            "title": "Part 2 (45 min): HLD design narration without drawing",
            "tasks": [
              {
                "text": "Pick 2 HLD designs from your bank",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s2-t0"
              },
              {
                "text": "Narrate each in 15–20 minutes (no drawing) — just talk through the architecture, components, trade-offs, and failure modes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s2-t1"
              },
              {
                "text": "This simulates phone screen rounds where you can't draw",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-fri-s2-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w12-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Final DSA category sprint: Bit Manipulation + Math (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #190 — Reverse Bits (shift result left, OR with n&1, shift n right; 32 iterations)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 190,
                "difficulty": null,
                "id": "w12-sat-s0-t0"
              },
              {
                "text": "LeetCode #201 — Bitwise AND of Numbers Range (rightward shift both until equal; count shifts; shift result back left)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 201,
                "difficulty": null,
                "id": "w12-sat-s0-t1"
              },
              {
                "text": "LeetCode #287 — Find the Duplicate Number (Floyd's cycle detection on array treated as linked list: nums[i] is the \"next pointer\" at index i)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 287,
                "difficulty": null,
                "id": "w12-sat-s0-t2"
              },
              {
                "text": "Pattern: #287 is elegant — treat the array as a linked list where index i points to nums[i]. The duplicate creates a cycle. Run Floyd's algorithm. T: O(n), S: O(1).",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t3"
              },
              {
                "text": "Why not auto-increment: doesn't scale across DB shards; predictable (security concern)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t4"
              },
              {
                "text": "Approaches:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t5"
              },
              {
                "text": "UUID v4: random 128-bit; globally unique; no coordination; not sortable; large storage",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t6"
              },
              {
                "text": "Snowflake: 64-bit; timestamp (41 bits) + machine ID (10 bits) + sequence (12 bits); sortable by time; 4096 IDs/ms per machine; Twitter's approach",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t7"
              },
              {
                "text": "Flake (Boundary): similar to Snowflake but with MAC address; no central coordination",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t8"
              },
              {
                "text": "Ticket Server: single DB sequence generator; simple; single point of failure; use multiple ticket servers with different initial values and step sizes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t9"
              },
              {
                "text": "Choose: Snowflake for high throughput distributed systems; Ticket Server for simpler architectures",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t10"
              },
              {
                "text": "Clock skew problem: if machine clock moves backward, IDs are non-monotonic; solution: wait until clock catches up; detect and alert",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t11"
              },
              {
                "text": "Code: Implement a Snowflake ID generator as a singleton; handle clock skew; test uniqueness under concurrent load",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s0-t12"
              }
            ]
          },
          {
            "title": "Full Mock Interview #4",
            "tasks": [
              {
                "text": "30 min: LLD problem (pick from LLD designs in Weeks 1–9); focus on class hierarchy + code",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s1-t0"
              },
              {
                "text": "45 min: Combined DSA + system design: Design a feature flag service (lightweight: store flags in DB + cache; evaluate in SDK; A/B test capability)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s1-t1"
              },
              {
                "text": "Debrief: what trade-offs did you articulate clearly? What did you skip that you shouldn't have?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sat-s1-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w12-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #287 (Find Duplicate) — trace through [1,3,4,2,2] using Floyd's on the array",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 287,
                "difficulty": null,
                "id": "w12-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #25 (Reverse K Group) — trace through 1→2→3→4→5 with k=2",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 25,
                "difficulty": null,
                "id": "w12-sun-s0-t1"
              },
              {
                "text": "Q1: CAP theorem: if you have a network partition, which systems choose C and which choose A? Give real examples.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t2"
              },
              {
                "text": "Q2: Explain Raft leader election. What constitutes a quorum? What happens if the leader crashes?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t3"
              },
              {
                "text": "Q3: What is a CRDT? Give one example of a CRDT data structure and how it handles conflicts.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t4"
              },
              {
                "text": "Q4: 2PC vs Saga: what is the key structural difference? When would you use each?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t5"
              },
              {
                "text": "Q5: What is a Merkle tree and how is it used for anti-entropy in distributed systems?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t6"
              },
              {
                "text": "Q6: What is read-your-writes consistency? How would you implement it in a database with read replicas?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t7"
              },
              {
                "text": "For each of the 4 mocks this week: write 2 sentences on what you did well + 1 concrete improvement for next time",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t8"
              },
              {
                "text": "Identify your weakest mock category (DSA, HLD, LLD, or Behavioral) — this gets extra focus in Weeks 13–16",
                "tags": [
                  "HLD",
                  "LLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t9"
              },
              {
                "text": "CAP/PACELC: CP vs AP examples, PACELC summary",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t10"
              },
              {
                "text": "Consistency models: strong, eventual, read-your-writes, monotonic read — one example each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t11"
              },
              {
                "text": "Distributed locking: Redis single-node, Redlock, ZooKeeper approaches — one-line each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t12"
              },
              {
                "text": "Raft: leader election, quorum, log replication — 3 bullet points",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t13"
              },
              {
                "text": "2PC: 2 phases, 2 failure modes, why not in microservices",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t14"
              },
              {
                "text": "Skim Monday: Advanced Kafka patterns (schemas, backpressure, stream processing)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w12-sun-s0-t15"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 13,
    "month": 4,
    "title": "WEEK 13: Advanced Kafka + Reactive Programming + Final HLD Designs",
    "theme": "",
    "days": [
      {
        "dayKey": "w13-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Priority Queue patterns",
            "tasks": [
              {
                "text": "LeetCode #1642 — Furthest Building You Can Reach (min-heap for ladders; when you run out of ladders, replace the smallest-ladder jump with bricks if bricks available)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1642,
                "difficulty": null,
                "id": "w13-mon-s0-t0"
              },
              {
                "text": "Pattern: Greedy with min-heap — defer the decision. Don't commit ladders at each step; use bricks first and replace with ladder if a bigger jump comes. Heap size = number of ladders used.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Kafka Schema Registry + Avro",
            "tasks": [
              {
                "text": "Schema Registry: central store for Avro, JSON Schema, Protobuf schemas; each topic has a schema (key + value); producers serialize with schema ID; consumers fetch schema by ID to deserialize",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s1-t0"
              },
              {
                "text": "Avro: binary format; compact; schema required for deserialization; forward/backward compatibility — important when schema evolves",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s1-t1"
              },
              {
                "text": "Schema evolution compatibility: BACKWARD (new schema can read old data — add fields with defaults, remove optional fields), FORWARD (old schema can read new data), FULL (both)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s1-t2"
              },
              {
                "text": "Why Schema Registry: prevents consumers from breaking when producer changes message format; enforced contracts between services",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s1-t3"
              },
              {
                "text": "Code: Define an Avro schema for OrderEvent; configure KafkaAvroSerializer/Deserializer; test schema evolution with a new optional field",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Kafka Streams + Backpressure",
            "tasks": [
              {
                "text": "Kafka Streams: client library; stateful stream processing; KStream (record-at-a-time), KTable (changelog/materialized view), GlobalKTable (replicated to all instances)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s2-t0"
              },
              {
                "text": "Operations: filter, map, flatMap, groupByKey, aggregate, count, join (KStream-KStream windowed, KStream-KTable enrichment)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s2-t1"
              },
              {
                "text": "State stores: RocksDB-backed by default; fault-tolerant via changelog topics; interactive queries allow querying state stores from outside (REST endpoint on Kafka Streams app)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s2-t2"
              },
              {
                "text": "Backpressure: Kafka naturally provides backpressure — consumer polls at its own pace; if consumer is slow, messages accumulate in partition; consumer lag metric tells you how far behind",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s2-t3"
              },
              {
                "text": "When to use Kafka Streams vs Flink: Kafka Streams = simpler, embedded in your Java app, good for stateful enrichment and aggregation; Apache Flink = complex event processing, exactly-once at scale, large state management",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-mon-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w13-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Graph — Dijkstra's Algorithm",
            "tasks": [
              {
                "text": "LeetCode #743 — Network Delay Time (Dijkstra's: min-heap of (distance, node); relax edges; return max distance to any node)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 743,
                "difficulty": null,
                "id": "w13-tue-s0-t0"
              },
              {
                "text": "Pattern: Dijkstra's = BFS with a priority queue (min-heap on distance). Only works with non-negative weights. Greedy: always expand the unvisited node with smallest known distance. T: O((V+E) log V).",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Project Reactor Core",
            "tasks": [
              {
                "text": "Mono<T>: 0 or 1 item; Flux<T>: 0 to N items; both are lazy (nothing happens until subscribe())",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s1-t0"
              },
              {
                "text": "Operators: map() (sync transform), flatMap() (async transform — returns Publisher), filter(), take(n), zip() (combine two Publishers), merge() (interleave two Flux), concat() (sequential)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s1-t1"
              },
              {
                "text": "Error handling: onErrorReturn(fallback), onErrorResume(e -> fallback publisher), doOnError(log), retry(n)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s1-t2"
              },
              {
                "text": "Backpressure: subscriber signals demand (request(n)); publisher only emits as fast as subscriber can handle; built into the reactive spec (Reactive Streams)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s1-t3"
              },
              {
                "text": "Blocking in reactive: NEVER call .block() or Thread.sleep() inside a reactive chain (blocks the event loop thread); use subscribeOn(Schedulers.boundedElastic()) to offload blocking I/O",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Spring WebFlux + R2DBC",
            "tasks": [
              {
                "text": "WebFlux: reactive web framework; Netty event loop (non-blocking I/O); RouterFunction or @RestController (both work)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s2-t0"
              },
              {
                "text": "@RestController with Mono/Flux return types: Spring handles subscription automatically",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s2-t1"
              },
              {
                "text": "R2DBC: reactive relational DB driver; non-blocking DB calls; DatabaseClient or R2dbcRepository",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s2-t2"
              },
              {
                "text": "When to use WebFlux over Servlet: high concurrency I/O-bound workloads; streaming responses (Server-Sent Events); reactive end-to-end (DB + HTTP all reactive); NOT for CPU-bound work",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s2-t3"
              },
              {
                "text": "When NOT to use: team unfamiliar with reactive; heavy use of blocking libraries; traditional JDBC (use virtual threads + Spring MVC instead in Java 21)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s2-t4"
              },
              {
                "text": "Code: Reactive REST endpoint returning Flux<Product>; reactive DB call with R2DBC; SSE endpoint using Flux with MediaType.TEXT_EVENT_STREAM",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-tue-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w13-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Advanced Graph",
            "tasks": [
              {
                "text": "LeetCode #787 — Cheapest Flights Within K Stops (Bellman-Ford with K iterations, not Dijkstra; K stops = K+1 relaxation rounds; copy array each round to prevent chaining)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 787,
                "difficulty": null,
                "id": "w13-wed-s0-t0"
              },
              {
                "text": "Pattern: K-constrained shortest path → Bellman-Ford with K iterations. Dijkstra doesn't work here because you need to track number of stops, not just shortest distance. The copy-array trick prevents extending paths within the same round.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Operational Transformation vs CRDT",
            "tasks": [
              {
                "text": "Collaborative editing: multiple users edit same document simultaneously; changes must converge to same state",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s1-t0"
              },
              {
                "text": "Operational Transformation (OT): transform concurrent operations relative to each other; insert(\"A\", position=5) by user1 and delete(position=3) by user2 → transform position before applying; complex; Google Docs uses OT",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s1-t1"
              },
              {
                "text": "CRDT for text: Logoot, LSEQ — assign unique position identifiers between characters; insertions always go between two positions; deletions mark as tombstone; no server coordination needed; conflict-free by design",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s1-t2"
              },
              {
                "text": "Tradeoff: OT requires a server to serialize operations; CRDT can work peer-to-peer; CRDT simpler for decentralized but more storage overhead",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Architecture + Cursors + Presence",
            "tasks": [
              {
                "text": "WebSocket: persistent connection per user; receive operations in real-time; bidirectional",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s2-t0"
              },
              {
                "text": "Document server: receives op from user → applies to server doc state → broadcasts to all connected users → stores op in log",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s2-t1"
              },
              {
                "text": "Op log: append-only; enables document reconstruction from any point; enables undo (reverse operations)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s2-t2"
              },
              {
                "text": "Cursor/presence: user cursor positions broadcast via WebSocket; throttle updates (don't send every keystroke — debounce 100ms)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s2-t3"
              },
              {
                "text": "Offline editing: local ops buffered; on reconnect, submit all buffered ops; server applies in order; user sees merged result",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s2-t4"
              },
              {
                "text": "Storage: document body as op log (event sourcing); current snapshot stored separately for fast load; rebuild snapshot from log periodically",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-wed-s2-t5"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w13-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Minimum Spanning Tree",
            "tasks": [
              {
                "text": "LeetCode #1584 — Min Cost to Connect All Points (Prim's algorithm or Kruskal's; build MST of 2D points using Manhattan distance)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1584,
                "difficulty": null,
                "id": "w13-thu-s0-t0"
              },
              {
                "text": "Pattern: MST = connect all nodes with minimum total edge weight. Prim's (start from one node, always add cheapest edge to a new node — min-heap) or Kruskal's (sort all edges, add if no cycle — Union-Find). For dense graphs, Prim's is better.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s0-t1"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Order Book + Matching Engine",
            "tasks": [
              {
                "text": "Functional: place buy/sell orders, order matching (market order, limit order), real-time price feed, order history",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s1-t0"
              },
              {
                "text": "Order Book: bids (buy orders, sorted DESC by price) + asks (sell orders, sorted ASC by price); top of book = best bid + best ask; spread = ask - bid",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s1-t1"
              },
              {
                "text": "Matching engine: when bid price >= ask price → match; execute trade at maker's price; remove matched quantity from book",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s1-t2"
              },
              {
                "text": "Data structure: TreeMap<Price, Queue<Order>> for both bids and asks; O(log n) insert/remove; O(1) best price lookup",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s1-t3"
              },
              {
                "text": "Throughput: matching engines process millions of orders/sec; Java-based ME must avoid GC pauses (GC tuning, object pooling, off-heap memory); single-threaded for matching to avoid lock contention; multiple threads for order intake + publishing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s1-t4"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Market Data Feed + Persistence",
            "tasks": [
              {
                "text": "Market data publisher: after each match → publish trade execution + updated order book snapshot to Kafka; consumers include: price feed service (WebSocket to traders), risk management service, analytics",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s2-t0"
              },
              {
                "text": "Persistence: WAL for order events; replay to rebuild order book state; store all orders + executions in time-series DB (ClickHouse or TimescaleDB) for analytics",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s2-t1"
              },
              {
                "text": "Risk controls: pre-trade checks (credit limit, position limit, duplicate order detection); reject before entering order book",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s2-t2"
              },
              {
                "text": "Regulatory: every order and trade must be logged with timestamp (microsecond precision), immutable; audit trail mandatory",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-thu-s2-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w13-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Practice set — mixed senior-level review",
            "tasks": [
              {
                "text": "LeetCode #853 — Car Fleet (sort by position; use stack to count fleets; if current car arrives at destination after the car ahead — it catches up and merges)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 853,
                "difficulty": null,
                "id": "w13-fri-s0-t0"
              },
              {
                "text": "LeetCode #2976 — Minimum Cost to Convert String I (Dijkstra's on character graph; find cheapest conversion between any two chars)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 2976,
                "difficulty": null,
                "id": "w13-fri-s0-t1"
              },
              {
                "text": "Pattern: #853 is a monotonic stack problem disguised as a simulation. Compute time to reach destination for each car sorted by position (descending); use stack — if time <= stack top time, same fleet (pop it into current); else new fleet.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s0-t2"
              }
            ]
          },
          {
            "title": "Subtopic 1 (45 min): Interview Strategy by Company Type",
            "tasks": [
              {
                "text": "MNC/Indian IT (TCS, Infosys, Wipro, Capgemini at senior level): heavy Spring Boot + Microservices + K8s + AWS/Azure; design patterns + LLD important; behavioral light; code quality > algorithm complexity; system design at macro level",
                "tags": [
                  "HLD",
                  "K8s",
                  "LLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s1-t0"
              },
              {
                "text": "Product companies (Flipkart, Swiggy, Paytm, Razorpay, CRED): DSA is important (LeetCode medium/hard); LLD very heavy; HLD at production scale; behavioral moderately important",
                "tags": [
                  "HLD",
                  "LLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w13-fri-s1-t1"
              },
              {
                "text": "FAANG/FAANG-adjacent (Amazon, Google, Microsoft, Meta Hyderabad): DSA hardest; HLD at massive scale with trade-off depth; behavioral very important (Amazon Leadership Principles); 4–6 rounds typical",
                "tags": [
                  "HLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s1-t2"
              },
              {
                "text": "Focus recommendation for remaining weeks: MNC → Week 14 Spring Boot deep; Product → Week 14 LLD + DSA; FAANG → Week 14 DSA hard + HLD",
                "tags": [
                  "HLD",
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w13-fri-s1-t3"
              }
            ]
          },
          {
            "title": "Subtopic 2 (45 min): Interview Day Checklist + Mindset",
            "tasks": [
              {
                "text": "Before: sleep well (not just night before — 3 days before); brief review of cheat sheets morning-of (not cramming); set up IDE + compiler ready for coding round",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s2-t0"
              },
              {
                "text": "During DSA round: (1) clarify problem (5 min, ask about input size, edge cases, constraints); (2) state approach before coding; (3) code; (4) trace through example; (5) analyse complexity; (6) discuss improvements",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s2-t1"
              },
              {
                "text": "During HLD round: (1) ask clarifying questions (users? read/write ratio? consistency requirements?); (2) estimate capacity; (3) define APIs; (4) data model; (5) high-level diagram; (6) deep dive one component; (7) discuss failure scenarios and trade-offs",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s2-t2"
              },
              {
                "text": "During behavioral: STAR, stay specific, don't speak in generalities; \"we did...\" → \"I specifically...\"; quantify everything; answer the question asked",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s2-t3"
              },
              {
                "text": "Red flags to avoid: silent coding (always narrate), never \"I don't know\" (say \"I'd approach it by...\" and think aloud), don't over-engineer DSA (clean O(n) beats complicated O(n log n))",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-fri-s2-t4"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w13-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Hardest tier sprint (3 problems)",
            "tasks": [
              {
                "text": "LeetCode #4 — Median of Two Sorted Arrays (binary search on smaller array; T: O(log min(m,n)))",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 4,
                "difficulty": null,
                "id": "w13-sat-s0-t0"
              },
              {
                "text": "LeetCode #23 — Merge K Sorted Lists (heap — already done; this time aim for perfect code from memory)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 23,
                "difficulty": null,
                "id": "w13-sat-s0-t1"
              },
              {
                "text": "LeetCode #297 — Serialize and Deserialize Binary Tree (BFS or preorder DFS; handle null markers)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 297,
                "difficulty": null,
                "id": "w13-sat-s0-t2"
              },
              {
                "text": "Pattern: #4 is hard because it requires binary search on the partition, not on the values. The key insight: find a partition in both arrays such that all elements on the left are smaller than all on the right. Binary search on the smaller array's partition.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w13-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Full Mock Interview #5 — Senior-Level Simulation",
            "tasks": [
              {
                "text": "50 min: Full HLD round — design \"Design a recommendation system for an e-commerce platform\"",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t0"
              },
              {
                "text": "Must cover: data collection (user events), feature engineering, model serving, A/B testing, cold start problem, latency vs accuracy trade-off",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t1"
              },
              {
                "text": "Drive the conversation; interviewer only asks follow-up questions",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t2"
              },
              {
                "text": "40 min: LLD round — design \"Design a hotel booking system\"",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t3"
              },
              {
                "text": "Classes: Hotel, Room (RoomType, status), Booking, Payment, Guest, SearchService, ReservationService, PricingService",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t4"
              },
              {
                "text": "Focus: concurrency (prevent double-booking), Strategy for pricing, state machine for booking",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t5"
              },
              {
                "text": "States: IDLE → CARD_INSERTED → PIN_ENTERED → TRANSACTION → DISPENSING → CARD_EJECTED",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t6"
              },
              {
                "text": "State pattern: each state is a class; transitions are explicit; invalid transitions throw exception",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t7"
              },
              {
                "text": "Classes: ATM (context), ATMState (interface), each state class, CardReader, PinValidator, CashDispenser, BankService (interface), PrinterService",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t8"
              },
              {
                "text": "Security: PIN should never be stored; compare hash; lockout after 3 failed attempts",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t9"
              },
              {
                "text": "Transaction: check balance → debit account (via BankService with idempotency key) → dispense cash; rollback if cash dispensing fails",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t10"
              },
              {
                "text": "Code: ATM.insertCard() transitions state; ATM.enterPin() validates and transitions; ATM.withdraw(amount) calls BankService + dispenses",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sat-s1-t11"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w13-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #4 (Median of Two Sorted Arrays) — this is hard; trace through [1,3] and [2] slowly",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 4,
                "difficulty": "Hard",
                "id": "w13-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #743 (Network Delay Time / Dijkstra's) — trace through the heap expansion",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 743,
                "difficulty": null,
                "id": "w13-sun-s0-t1"
              },
              {
                "text": "Q1: Avro schema evolution — what is BACKWARD compatibility? Give an example of a compatible and incompatible change.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t2"
              },
              {
                "text": "Q2: In Project Reactor, why must you never call Thread.sleep() inside a reactive chain? What should you use instead?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t3"
              },
              {
                "text": "Q3: Kafka Streams KStream vs KTable — what is the semantic difference?",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t4"
              },
              {
                "text": "Q4: Operational Transformation vs CRDT for collaborative editing — what is the fundamental difference?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t5"
              },
              {
                "text": "Q5: Bellman-Ford vs Dijkstra's — when do you use each? What does K-stops constraint require?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t6"
              },
              {
                "text": "Q6: In a stock trading platform matching engine, why is single-threaded execution preferred for the matching loop?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t7"
              },
              {
                "text": "Read all 8 stories aloud; this time, also add 2 new answers: \"What is your biggest technical weakness?\" and \"What kind of engineering culture do you thrive in?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t8"
              },
              {
                "text": "Total interview answers ready: 8 STAR + 2 self-reflection + \"Why this company?\" per company you apply to",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t9"
              },
              {
                "text": "Kafka Schema Registry: Avro, compatibility modes, why it matters",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t10"
              },
              {
                "text": "Kafka Streams: KStream vs KTable, stateful operations",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t11"
              },
              {
                "text": "Reactive: Mono vs Flux, key operators, backpressure, when NOT to use WebFlux",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t12"
              },
              {
                "text": "Dijkstra vs Bellman-Ford vs BFS: when to use each (non-negative weights / negative weights / unweighted)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t13"
              },
              {
                "text": "Identify your target company type from the Friday strategy session; Week 14 tilts accordingly",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w13-sun-s0-t14"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 14,
    "month": 4,
    "title": "WEEK 14: Mock Interview Blitz + Weak Area Deep Dive",
    "theme": "",
    "days": [
      {
        "dayKey": "w14-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Timed Sprint",
            "tasks": [
              {
                "text": "3 random LeetCode problems (one from each: array/string, tree/graph, DP); timer 15 min each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-mon-s0-t0"
              },
              {
                "text": "No editor autocomplete; write full solution; analyse complexity after each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-mon-s0-t1"
              },
              {
                "text": "Target: 2/3 clean solutions; 3/3 with tracing bugs = also acceptable",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-mon-s0-t2"
              }
            ]
          },
          {
            "title": "Weak Area Session #1",
            "tasks": [
              {
                "text": "Identify your #1 weak area from mock interview debriefs (likely one of: Java Concurrency, HLD trade-offs, DP recurrence, LLD class design, or Behavioral specificity)",
                "tags": [
                  "Concurrency",
                  "HLD",
                  "LLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-mon-s1-t0"
              },
              {
                "text": "Spend the full 90 minutes revisiting that area's notes + re-solving 2 problems/designs from that topic",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-mon-s1-t1"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w14-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Timed Sprint",
            "tasks": [
              {
                "text": "LeetCode #76 — Minimum Window Substring (sliding window + character frequency map; classic hard)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 76,
                "difficulty": "Hard",
                "id": "w14-tue-s0-t0"
              },
              {
                "text": "Pattern: expand right (decrease need count when a needed char hits 0); shrink left (increase need count when a needed char goes from 0 to -1... wait, update when char count goes from needed to satisfied). Trace \"ADOBECODEBANC\", t=\"ABC\" carefully.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-tue-s0-t1"
              }
            ]
          },
          {
            "title": "Weak Area Session #2",
            "tasks": [
              {
                "text": "Second identified weak area from mock debriefs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-tue-s1-t0"
              },
              {
                "text": "Include: re-explain the concept to yourself aloud (Feynman technique); then solve 1 fresh problem on the topic",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-tue-s1-t1"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w14-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Timed Sprint",
            "tasks": [
              {
                "text": "LeetCode #127 — Word Ladder (BFS on word graph; generate all 1-char variants; shortest path = number of transformations)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 127,
                "difficulty": null,
                "id": "w14-wed-s0-t0"
              },
              {
                "text": "Pattern: BFS gives shortest path in unweighted graphs. Generating all 1-char variants of a word (26 * wordLen candidates per node) is the key step. O(M² * N) where M=word length, N=wordList size.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-wed-s0-t1"
              }
            ]
          },
          {
            "title": "Full Mock Interview #6 — DSA Focus",
            "tasks": [
              {
                "text": "45 min: two DSA problems back-to-back; medium difficulty; simulating a 45-minute DSA coding round",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Medium",
                "id": "w14-wed-s1-t0"
              },
              {
                "text": "45 min: code review round — write a Spring Boot REST endpoint + service + repository layer from scratch (no framework assistance); reviewer checks: error handling, transaction management, input validation, test coverage awareness",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-wed-s1-t1"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w14-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Timed Sprint",
            "tasks": [
              {
                "text": "LeetCode #146 — LRU Cache (LinkedHashMap with access-order OR doubly linked list + HashMap for O(1) get and put)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 146,
                "difficulty": null,
                "id": "w14-thu-s0-t0"
              },
              {
                "text": "LeetCode #460 — LFU Cache (harder; HashMap + sorted frequency map + doubly linked list per frequency)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 460,
                "difficulty": null,
                "id": "w14-thu-s0-t1"
              },
              {
                "text": "Pattern: LRU = LinkedHashMap(capacity, 0.75f, true) + override removeEldestEntry(). LFU requires tracking frequency of each key and a map from frequency → DLL of keys at that frequency. LFU is P2 — know the approach, not the full code.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-thu-s0-t2"
              }
            ]
          },
          {
            "title": "Full Mock Interview #7 — HLD + Behavioral",
            "tasks": [
              {
                "text": "45 min: HLD — design a real-time leaderboard for a gaming platform (Redis Sorted Set, score update, top-K queries, global vs regional)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-thu-s1-t0"
              },
              {
                "text": "45 min: Behavioral round — 5 questions; all from your STAR bank; interviewer probes each answer with \"tell me more about...\" and \"what would you have done differently?\"",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-thu-s1-t1"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w14-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — DSA hard practice",
            "tasks": [
              {
                "text": "LeetCode #25 — Reverse Nodes in K-Group (if not fluent, re-do it; this appears in senior interviews at product companies)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 25,
                "difficulty": null,
                "id": "w14-fri-s0-t0"
              },
              {
                "text": "LeetCode #42 — Trapping Rain Water (if not instant recall, redo; it's a senior-level favorite)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 42,
                "difficulty": null,
                "id": "w14-fri-s0-t1"
              }
            ]
          },
          {
            "title": "Interview Strategy Session",
            "tasks": [
              {
                "text": "Spend 30 min: craft your 2-minute \"tell me about yourself\" — background → current role → key achievements → what you're looking for; practice until smooth",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-fri-s1-t0"
              },
              {
                "text": "Spend 30 min: prepare 3 good questions to ask the interviewer (shows engagement, seniority): \"How does the team approach trade-offs between velocity and reliability?\", \"What does the oncall rotation look like for this team?\", \"What's the biggest technical challenge the team is facing in the next 6 months?\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-fri-s1-t1"
              },
              {
                "text": "Spend 30 min: company-specific prep for your top 2 target companies — read their engineering blog, recent tech talks (YouTube), tech stack choices, understand their scale",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-fri-s1-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w14-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Final hard set",
            "tasks": [
              {
                "text": "LeetCode #41 — First Missing Positive (in-place cycle sort; O(n) time, O(1) space; place each number at index = number-1)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 41,
                "difficulty": null,
                "id": "w14-sat-s0-t0"
              },
              {
                "text": "LeetCode #239 — Sliding Window Maximum (monotonic deque — already done; perfect code from memory)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 239,
                "difficulty": null,
                "id": "w14-sat-s0-t1"
              },
              {
                "text": "LeetCode #295 — Find Median from Data Stream (two heaps — already done; perfect code from memory)",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 295,
                "difficulty": null,
                "id": "w14-sat-s0-t2"
              },
              {
                "text": "All three should now be instant recall, not problem-solving. If any still requires thinking, add it to your Sunday re-solve list.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s0-t3"
              }
            ]
          },
          {
            "title": "Full Mock Interview #8 — Full Loop Simulation",
            "tasks": [
              {
                "text": "Simulate a complete 3-round interview loop back-to-back:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s1-t0"
              },
              {
                "text": "Round 1 (30 min): DSA medium problem",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Medium",
                "id": "w14-sat-s1-t1"
              },
              {
                "text": "Round 2 (30 min): LLD problem",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s1-t2"
              },
              {
                "text": "Round 3 (30 min): HLD problem",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s1-t3"
              },
              {
                "text": "Self-assess after: which round felt strongest? Which weakest? That drives Saturday's focus.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s1-t4"
              }
            ]
          },
          {
            "title": "Cheat Sheet Review + Company Research",
            "tasks": [
              {
                "text": "30 min: review your master cheat sheet (created in Week 10); update any gaps from months 3–4",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s2-t0"
              },
              {
                "text": "45 min: for your 2 top target companies, research: tech stack, system scale, recent engineering blog posts, Glassdoor interview experiences; write down 5 anticipated questions specific to each company",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sat-s2-t1"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w14-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Re-solve LeetCode #76 (Minimum Window Substring) — the hardest sliding window",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 76,
                "difficulty": null,
                "id": "w14-sun-s0-t0"
              },
              {
                "text": "Re-solve LeetCode #41 (First Missing Positive) — in-place cycle sort from scratch",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 41,
                "difficulty": null,
                "id": "w14-sun-s0-t1"
              },
              {
                "text": "Draw 10 questions from your cheat sheets (3 Java/Spring, 3 DSA patterns, 2 HLD, 2 Behavioral)",
                "tags": [
                  "HLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t2"
              },
              {
                "text": "Answer each without looking at notes; check against notes after; flag any gap",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t3"
              },
              {
                "text": "All 8 stories + \"tell me about yourself\" (2 min) + \"biggest weakness\" + \"why this company\" (per company)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t4"
              },
              {
                "text": "Total: ~22 minutes; if any story is still rough, rewrite it today",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t5"
              },
              {
                "text": "Write down: what are you most confident in? (DSA, Java Concurrency, HLD patterns, Behavioral?)",
                "tags": [
                  "Concurrency",
                  "HLD",
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t6"
              },
              {
                "text": "Write down: what do you still want to improve? Commit to 1 specific action per gap in the final 2 weeks",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t7"
              },
              {
                "text": "Read the interview day checklist from Week 13 Friday notes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t8"
              },
              {
                "text": "Schedule mock interviews with friends, senior engineers, or platforms (Pramp, Interviewing.io)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w14-sun-s0-t9"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 15,
    "month": 4,
    "title": "WEEK 15: Final Mock Loop + Pattern Reinforcement",
    "theme": "",
    "days": [
      {
        "dayKey": "w15-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[45 min] 3 random DSA problems timed (15 min each); aim for zero hints; record time and bugs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t0"
              },
              {
                "text": "[90 min] rotating mock type:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t1"
              },
              {
                "text": "MON: Full HLD (45 min design + 45 min component deep-dive + failure scenarios)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t2"
              },
              {
                "text": "TUE: LLD (45 min class design + 45 min core code)",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t3"
              },
              {
                "text": "WED: DSA pair programming (45 min + 45 min, alternate interviewer/candidate with study buddy if possible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t4"
              },
              {
                "text": "THU: Behavioral (full 45-min behavioral round from STAR bank; 45 min debrief + polish)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t5"
              },
              {
                "text": "FRI: Mixed — 45 min DSA + 45 min HLD (simulating a real interview combination)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-mon-s0-t6"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w15-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[45 min] 3 random DSA problems timed (15 min each); aim for zero hints; record time and bugs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t0"
              },
              {
                "text": "[90 min] rotating mock type:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t1"
              },
              {
                "text": "MON: Full HLD (45 min design + 45 min component deep-dive + failure scenarios)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t2"
              },
              {
                "text": "TUE: LLD (45 min class design + 45 min core code)",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t3"
              },
              {
                "text": "WED: DSA pair programming (45 min + 45 min, alternate interviewer/candidate with study buddy if possible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t4"
              },
              {
                "text": "THU: Behavioral (full 45-min behavioral round from STAR bank; 45 min debrief + polish)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t5"
              },
              {
                "text": "FRI: Mixed — 45 min DSA + 45 min HLD (simulating a real interview combination)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-tue-s0-t6"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w15-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[45 min] 3 random DSA problems timed (15 min each); aim for zero hints; record time and bugs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t0"
              },
              {
                "text": "[90 min] rotating mock type:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t1"
              },
              {
                "text": "MON: Full HLD (45 min design + 45 min component deep-dive + failure scenarios)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t2"
              },
              {
                "text": "TUE: LLD (45 min class design + 45 min core code)",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t3"
              },
              {
                "text": "WED: DSA pair programming (45 min + 45 min, alternate interviewer/candidate with study buddy if possible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t4"
              },
              {
                "text": "THU: Behavioral (full 45-min behavioral round from STAR bank; 45 min debrief + polish)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t5"
              },
              {
                "text": "FRI: Mixed — 45 min DSA + 45 min HLD (simulating a real interview combination)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-wed-s0-t6"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w15-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[45 min] 3 random DSA problems timed (15 min each); aim for zero hints; record time and bugs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t0"
              },
              {
                "text": "[90 min] rotating mock type:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t1"
              },
              {
                "text": "MON: Full HLD (45 min design + 45 min component deep-dive + failure scenarios)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t2"
              },
              {
                "text": "TUE: LLD (45 min class design + 45 min core code)",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t3"
              },
              {
                "text": "WED: DSA pair programming (45 min + 45 min, alternate interviewer/candidate with study buddy if possible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t4"
              },
              {
                "text": "THU: Behavioral (full 45-min behavioral round from STAR bank; 45 min debrief + polish)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t5"
              },
              {
                "text": "FRI: Mixed — 45 min DSA + 45 min HLD (simulating a real interview combination)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-thu-s0-t6"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w15-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[45 min] 3 random DSA problems timed (15 min each); aim for zero hints; record time and bugs",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t0"
              },
              {
                "text": "[90 min] rotating mock type:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t1"
              },
              {
                "text": "MON: Full HLD (45 min design + 45 min component deep-dive + failure scenarios)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t2"
              },
              {
                "text": "TUE: LLD (45 min class design + 45 min core code)",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t3"
              },
              {
                "text": "WED: DSA pair programming (45 min + 45 min, alternate interviewer/candidate with study buddy if possible)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t4"
              },
              {
                "text": "THU: Behavioral (full 45-min behavioral round from STAR bank; 45 min debrief + polish)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t5"
              },
              {
                "text": "FRI: Mixed — 45 min DSA + 45 min HLD (simulating a real interview combination)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-fri-s0-t6"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w15-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "DSA — Final Pattern Audit",
            "tasks": [
              {
                "text": "Two Pointers → LeetCode #42",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 42,
                "difficulty": null,
                "id": "w15-sat-s0-t0"
              },
              {
                "text": "Sliding Window → LeetCode #76",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 76,
                "difficulty": null,
                "id": "w15-sat-s0-t1"
              },
              {
                "text": "Binary Search → LeetCode #33",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 33,
                "difficulty": null,
                "id": "w15-sat-s0-t2"
              },
              {
                "text": "Stack / Monotonic → LeetCode #84",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 84,
                "difficulty": null,
                "id": "w15-sat-s0-t3"
              },
              {
                "text": "BFS/DFS → LeetCode #200",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 200,
                "difficulty": null,
                "id": "w15-sat-s0-t4"
              },
              {
                "text": "Union Find → LeetCode #547",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 547,
                "difficulty": null,
                "id": "w15-sat-s0-t5"
              },
              {
                "text": "Topological Sort → LeetCode #207",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 207,
                "difficulty": null,
                "id": "w15-sat-s0-t6"
              },
              {
                "text": "DP 1D → LeetCode #322",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 322,
                "difficulty": null,
                "id": "w15-sat-s0-t7"
              },
              {
                "text": "DP 2D → LeetCode #1143",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 1143,
                "difficulty": null,
                "id": "w15-sat-s0-t8"
              },
              {
                "text": "Heap → LeetCode #295",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 295,
                "difficulty": null,
                "id": "w15-sat-s0-t9"
              },
              {
                "text": "Trie → LeetCode #208",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 208,
                "difficulty": null,
                "id": "w15-sat-s0-t10"
              },
              {
                "text": "Backtracking → LeetCode #46",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 46,
                "difficulty": null,
                "id": "w15-sat-s0-t11"
              }
            ]
          },
          {
            "title": "Final HLD Pattern Audit",
            "tasks": [
              {
                "text": "Can you name all components immediately? (yes/no)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s1-t0"
              },
              {
                "text": "Can you justify the DB choice? (yes/no)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s1-t1"
              },
              {
                "text": "Can you explain the cache strategy? (yes/no)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s1-t2"
              },
              {
                "text": "Can you describe one failure scenario and its mitigation? (yes/no)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s1-t3"
              }
            ]
          },
          {
            "title": "Final LLD Pattern Audit",
            "tasks": [
              {
                "text": "Parking Lot: Strategy (Fee), Factory (Vehicle), State (SpotStatus)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t0"
              },
              {
                "text": "Library: Strategy (Fine), Optimistic Lock (BookCopy)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t1"
              },
              {
                "text": "URL Shortener: Base62 encoding, Cache-aside, Strategy (redirect type)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t2"
              },
              {
                "text": "Elevator: State (ElevatorState), Strategy (Scheduler), Observer (Display)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t3"
              },
              {
                "text": "Rate Limiter: Token Bucket (Semaphore + scheduler), Redis Lua for distributed",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t4"
              },
              {
                "text": "Task Scheduler: Priority Queue, Strategy (retry policy), State (task status)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t5"
              },
              {
                "text": "ATM: State (per ATM state), Template Method (transaction flow)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t6"
              },
              {
                "text": "Hotel Booking: Concurrency (pessimistic/optimistic lock), Strategy (pricing)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sat-s2-t7"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w15-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Solve 2 problems you scored weakest on during the pattern audit this week",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t0"
              },
              {
                "text": "12 questions: one from each DSA pattern; 3 Spring Boot; 3 Distributed Systems; 2 STAR",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t1"
              },
              {
                "text": "No notes; time yourself; target < 90 seconds per answer",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t2"
              },
              {
                "text": "Close your eyes; mentally walk through a full interview day:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t3"
              },
              {
                "text": "You're asked to design Twitter's feed. What's your first sentence?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t4"
              },
              {
                "text": "You're given LeetCode #33. What do you say before coding?",
                "tags": [
                  "LC"
                ],
                "leetcodeNum": 33,
                "difficulty": null,
                "id": "w15-sun-s0-t5"
              },
              {
                "text": "You're asked \"tell me about a failure.\" Which story do you tell?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t6"
              },
              {
                "text": "You're asked about thread safety in a HashMap. What's your opening?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t7"
              },
              {
                "text": "This mental rehearsal reduces first-interview nerves significantly",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t8"
              },
              {
                "text": "Week 16 is interview-mode readiness. If interviews are scheduled, Week 16 is your final prep. If not, use it to apply actively while staying sharp.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w15-sun-s0-t9"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "weekNum": 16,
    "month": 4,
    "title": "WEEK 16: 🎯 Interview-Ready Week",
    "theme": "Light maintenance. No new content. Stay sharp. Apply to target companies. This is a maintenance week, not a cramming week.",
    "days": [
      {
        "dayKey": "w16-mon",
        "dayName": "Monday",
        "dayShort": "mon",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[30 min] 2 DSA problems: one you know well (for confidence), one you found hard in Week 15 (for repair)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w16-mon-s0-t0"
              },
              {
                "text": "[30 min] Read 1 HLD design from your cheat sheet; narrate it aloud without looking at notes; time yourself",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-mon-s0-t1"
              },
              {
                "text": "[30 min] Read 2–3 STAR stories aloud; keep them fresh; make sure results are crisp",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-mon-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w16-tue",
        "dayName": "Tuesday",
        "dayShort": "tue",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[30 min] 2 DSA problems: one you know well (for confidence), one you found hard in Week 15 (for repair)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w16-tue-s0-t0"
              },
              {
                "text": "[30 min] Read 1 HLD design from your cheat sheet; narrate it aloud without looking at notes; time yourself",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-tue-s0-t1"
              },
              {
                "text": "[30 min] Read 2–3 STAR stories aloud; keep them fresh; make sure results are crisp",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-tue-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w16-wed",
        "dayName": "Wednesday",
        "dayShort": "wed",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "[30 min] 2 DSA problems: one you know well (for confidence), one you found hard in Week 15 (for repair)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Hard",
                "id": "w16-wed-s0-t0"
              },
              {
                "text": "[30 min] Read 1 HLD design from your cheat sheet; narrate it aloud without looking at notes; time yourself",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-wed-s0-t1"
              },
              {
                "text": "[30 min] Read 2–3 STAR stories aloud; keep them fresh; make sure results are crisp",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-wed-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w16-thu",
        "dayName": "Thursday",
        "dayShort": "thu",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Apply to top 3–5 target companies if not already done",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-thu-s0-t0"
              },
              {
                "text": "Research each company: recent engineering blog posts, tech stack decisions, team size, product scale",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-thu-s0-t1"
              },
              {
                "text": "Tailor your \"why this company\" answer for each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-thu-s0-t2"
              },
              {
                "text": "Check LinkedIn connections who work there — any warm introductions possible?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-thu-s0-t3"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w16-fri",
        "dayName": "Friday",
        "dayShort": "fri",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "45 min: Complete one medium DSA problem under interview conditions (no IDE, no Google)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": "Medium",
                "id": "w16-fri-s0-t0"
              },
              {
                "text": "45 min: Narrate one full HLD design (no writing — just talking through it as if on a phone screen)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-fri-s0-t1"
              },
              {
                "text": "45 min: Complete STAR run-through + \"tell me about yourself\" (time yourself; keep total to 30 min for all stories)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-fri-s0-t2"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w16-sat",
        "dayName": "Saturday",
        "dayShort": "sat",
        "isSunday": false,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Simulate a complete interview loop, back to back, with a study buddy or recording yourself:",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t0"
              },
              {
                "text": "[50 min] Round 1: DSA (2 problems)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t1"
              },
              {
                "text": "[10 min] Break",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t2"
              },
              {
                "text": "[50 min] Round 2: HLD design",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t3"
              },
              {
                "text": "[10 min] Break",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t4"
              },
              {
                "text": "[50 min] Round 3: LLD design",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t5"
              },
              {
                "text": "[10 min] Break",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t6"
              },
              {
                "text": "[40 min] Round 4: Behavioral (full 45-min Q&A from STAR bank)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t7"
              },
              {
                "text": "Debrief: Write 3 things you did well, 1 thing to fix before interviews start",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sat-s0-t8"
              }
            ]
          }
        ]
      },
      {
        "dayKey": "w16-sun",
        "dayName": "Sunday",
        "dayShort": "sun",
        "isSunday": true,
        "sections": [
          {
            "title": "Tasks",
            "tasks": [
              {
                "text": "Solve 2 problems you're most confident in — build confidence, not repair",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t0"
              },
              {
                "text": "Note your solve times — should be < 10 min for problems you know well",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t1"
              },
              {
                "text": "Read your master cheat sheet one last time, front to back",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t2"
              },
              {
                "text": "Don't re-read to learn — you already know this; read to reinforce retrieval cues",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t3"
              },
              {
                "text": "Write down: \"What am I walking in with?\" — list your strongest skills honestly",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t4"
              },
              {
                "text": "Write down: \"What's my interview goal?\" — not \"get an offer\" (that's an outcome); the goal is \"show my real knowledge clearly and calmly\"",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t5"
              },
              {
                "text": "Read Feynman's rule one more time: if you can't explain it simply, study it more. You've been doing that for 4 months.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t6"
              },
              {
                "text": "Confirm all interview schedules, time zones, format (phone/video/onsite)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t7"
              },
              {
                "text": "Setup: stable internet, quiet room, working camera + mic tested, IDE ready with your preferred theme, drink of choice on the desk",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t8"
              },
              {
                "text": "Sleep goal: 8h for 3 nights leading up to interview day",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t9"
              },
              {
                "text": "Don't cram. Don't read new material. Skim your master cheat sheet lightly (20 min max) then put it away.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t10"
              },
              {
                "text": "Do something you enjoy. You've put in 4 months of structured work. The preparation is done.",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t11"
              },
              {
                "text": "[ ] Write a multi-step Stream pipeline with groupingBy + downstream collector",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t12"
              },
              {
                "text": "[ ] Explain Optional.orElseGet() vs orElse() — code example",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t13"
              },
              {
                "text": "[ ] Write a sealed interface with exhaustive switch expression",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t14"
              },
              {
                "text": "[ ] Explain virtual thread pinning — give 2 causes and 2 fixes",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t15"
              },
              {
                "text": "[ ] Explain StructuredTaskScope.ShutdownOnFailure — code example",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t16"
              },
              {
                "text": "[ ] Explain volatile: what it guarantees and what it does NOT guarantee",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t17"
              },
              {
                "text": "[ ] Write a BoundedBlockingQueue using ReentrantLock + Condition",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t18"
              },
              {
                "text": "[ ] Explain ConcurrentHashMap Java 8 internals vs Java 7 segments",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t19"
              },
              {
                "text": "[ ] Explain G1GC region layout and how MaxGCPauseMillis works",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t20"
              },
              {
                "text": "[ ] Read a thread dump and identify a deadlock cycle",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t21"
              },
              {
                "text": "[ ] Singleton: write the Enum Singleton and explain why it beats DCL",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t22"
              },
              {
                "text": "[ ] Builder: write a DatabaseConfig builder with mandatory + optional params",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t23"
              },
              {
                "text": "[ ] Decorator: write a caching proxy using JDK Dynamic Proxy",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t24"
              },
              {
                "text": "[ ] Observer: write a publisher + 2 subscribers with List<Observer>",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t25"
              },
              {
                "text": "[ ] Strategy: replace an if-else payment chain with Strategy pattern",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t26"
              },
              {
                "text": "[ ] Two Sum (HashMap, O(n))",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t27"
              },
              {
                "text": "[ ] Best Time to Buy and Sell Stock (single pass)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t28"
              },
              {
                "text": "[ ] Longest Substring Without Repeating (sliding window)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t29"
              },
              {
                "text": "[ ] 3Sum (sort + two pointer + dedup)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t30"
              },
              {
                "text": "[ ] Group Anagrams (HashMap sorted key)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t31"
              },
              {
                "text": "[ ] Binary Search (both templates)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t32"
              },
              {
                "text": "[ ] Search in Rotated Sorted Array",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t33"
              },
              {
                "text": "[ ] Valid Parentheses (stack)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t34"
              },
              {
                "text": "[ ] Daily Temperatures (monotonic stack)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t35"
              },
              {
                "text": "[ ] Largest Rectangle in Histogram (monotonic stack)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t36"
              },
              {
                "text": "[ ] Level Order Traversal (BFS with queue)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t37"
              },
              {
                "text": "[ ] Number of Islands (BFS or DFS)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t38"
              },
              {
                "text": "[ ] Explain @Transactional self-invocation problem — fix it",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t39"
              },
              {
                "text": "[ ] Explain @Transactional propagation REQUIRED vs REQUIRES_NEW",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t40"
              },
              {
                "text": "[ ] Write a JPQL query with JOIN FETCH to solve N+1",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t41"
              },
              {
                "text": "[ ] Write a GlobalExceptionHandler with @RestControllerAdvice",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t42"
              },
              {
                "text": "[ ] Write a @WebMvcTest with MockMvc + @MockBean",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t43"
              },
              {
                "text": "[ ] Explain Spring AOP proxy types (JDK Dynamic vs CGLIB) and when each is used",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t44"
              },
              {
                "text": "[ ] Explain at-least-once vs exactly-once — code strategies for each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t45"
              },
              {
                "text": "[ ] Explain the Outbox Pattern — why, how, what it prevents",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t46"
              },
              {
                "text": "[ ] Explain consumer group partition assignment (one consumer per partition rule)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t47"
              },
              {
                "text": "[ ] Write a @KafkaListener with manual ack + DLT handler",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t48"
              },
              {
                "text": "[ ] Explain Kafka Streams KStream vs KTable semantic difference",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t49"
              },
              {
                "text": "[ ] Explain liveness vs readiness probe — what happens when each fails?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t50"
              },
              {
                "text": "[ ] Explain HPA vs KEDA — when would you choose KEDA?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t51"
              },
              {
                "text": "[ ] Explain StatefulSet vs Deployment — 2 key differences",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t52"
              },
              {
                "text": "[ ] Explain Helm chart structure — what does values.yaml do?",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t53"
              },
              {
                "text": "[ ] Explain OpenShift SCC — how does it differ from K8s PodSecurityAdmission?",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t54"
              },
              {
                "text": "[ ] Course Schedule (topological sort, cycle detection)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t55"
              },
              {
                "text": "[ ] Clone Graph (DFS with HashMap)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t56"
              },
              {
                "text": "[ ] Climbing Stairs + House Robber (DP 1D)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t57"
              },
              {
                "text": "[ ] Coin Change (unbounded knapsack)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t58"
              },
              {
                "text": "[ ] Longest Common Subsequence (2D DP table)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t59"
              },
              {
                "text": "[ ] Partition Equal Subset Sum (0/1 knapsack)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t60"
              },
              {
                "text": "[ ] Find Median from Data Stream (two heaps)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t61"
              },
              {
                "text": "[ ] Merge K Sorted Lists (min-heap)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t62"
              },
              {
                "text": "[ ] Implement Trie (TrieNode + children + isEndOfWord)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t63"
              },
              {
                "text": "[ ] N-Queens (backtracking with HashSets for column, diag1, diag2)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t64"
              },
              {
                "text": "[ ] Burst Balloons (interval DP — last-to-burst thinking)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t65"
              },
              {
                "text": "[ ] URL Shortener (Base62, Redis cache, Kafka analytics, 302 vs 301)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t66"
              },
              {
                "text": "[ ] Notification System (Kafka fan-out, retry, DLT, idempotency)",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t67"
              },
              {
                "text": "[ ] Key-Value Store (LSM Tree, consistent hashing, quorum, gossip)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t68"
              },
              {
                "text": "[ ] Rate Limiter (Token Bucket algorithm, Redis Lua script, distributed)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t69"
              },
              {
                "text": "[ ] Web Crawler (URL Frontier, Bloom filter, politeness, distributed workers)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t70"
              },
              {
                "text": "[ ] Write a JwtFilter that validates Bearer token and sets SecurityContext",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t71"
              },
              {
                "text": "[ ] Explain OAuth2 Authorization Code Flow with PKCE — 5 steps",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t72"
              },
              {
                "text": "[ ] Explain @PreAuthorize vs @PostAuthorize with examples",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t73"
              },
              {
                "text": "[ ] Explain Spring Security self-invocation problem with method security",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t74"
              },
              {
                "text": "[ ] Explain JWT revocation problem and 2 workarounds",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t75"
              },
              {
                "text": "[ ] Explain CAP: which real systems are CP and which are AP?",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t76"
              },
              {
                "text": "[ ] Explain Raft leader election and quorum requirement",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t77"
              },
              {
                "text": "[ ] Explain CRDT — what problem it solves, one example",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t78"
              },
              {
                "text": "[ ] Explain 2PC: 2 phases, 2 failure modes, why not in microservices",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t79"
              },
              {
                "text": "[ ] Explain Saga: Choreography vs Orchestration — scenario for each",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t80"
              },
              {
                "text": "[ ] Explain read-your-writes consistency — how to implement with read replicas",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t81"
              },
              {
                "text": "[ ] Meeting Rooms II (sort + min-heap of end times)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t82"
              },
              {
                "text": "[ ] Merge Intervals (sort by start + merge condition)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t83"
              },
              {
                "text": "[ ] Linked List Cycle II (Floyd's — find cycle start)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t84"
              },
              {
                "text": "[ ] Sort List (merge sort on linked list)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t85"
              },
              {
                "text": "[ ] Number of 1 Bits (n & (n-1) trick)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t86"
              },
              {
                "text": "[ ] Find Duplicate Number (Floyd's on array as linked list)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t87"
              },
              {
                "text": "[ ] Dijkstra's (min-heap + distance array)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t88"
              },
              {
                "text": "[ ] Cheapest Flights K Stops (Bellman-Ford K rounds)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t89"
              },
              {
                "text": "[ ] Minimum Spanning Tree (Prim's with min-heap or Kruskal's + Union-Find)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t90"
              },
              {
                "text": "[ ] Twitter/X Timeline (Snowflake ID, fan-out hybrid, Redis Sorted Set)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t91"
              },
              {
                "text": "[ ] Instagram Feed (pre-signed S3, CDN, fan-out on write vs read)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t92"
              },
              {
                "text": "[ ] Payment System (idempotency key, Saga, ledger, reconciliation)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t93"
              },
              {
                "text": "[ ] Autocomplete (Trie, prefix sharding, Redis cache, trending blend)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t94"
              },
              {
                "text": "[ ] Real-Time Ride Sharing (Redis GeoHash, WebSocket, state machine)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t95"
              },
              {
                "text": "[ ] Leadership / Technical Initiative (Story #1)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t96"
              },
              {
                "text": "[ ] Conflict / Disagreement (Story #2)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t97"
              },
              {
                "text": "[ ] Failure / Learning (Story #4)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t98"
              },
              {
                "text": "[ ] Mentoring / Team Impact (Story #3)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t99"
              },
              {
                "text": "[ ] Production Incident (Story #5)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t100"
              },
              {
                "text": "[ ] Proactive Ownership (Story #6)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t101"
              },
              {
                "text": "[ ] Cross-Team Influence (Story #7)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t102"
              },
              {
                "text": "[ ] Performance Improvement (Story #8)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t103"
              },
              {
                "text": "[ ] \"Tell me about yourself\" < 2 minutes — smooth delivery",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t104"
              },
              {
                "text": "[ ] Ask 2–3 good questions to the interviewer (prepared, not generic)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t105"
              },
              {
                "text": "[ ] \"Why this company\" — specific, not generic, for each target company",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t106"
              },
              {
                "text": "[ ] During DSA: state approach before coding, speak aloud while coding, check edge cases, state complexity at end",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t107"
              },
              {
                "text": "[ ] During HLD: ask clarifying questions first, estimate capacity, define APIs, draw diagram, justify choices, discuss failure scenarios",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t108"
              },
              {
                "text": "[ ] During Behavioral: STAR, \"I\" not \"we\", quantified results, answer the question asked",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t109"
              },
              {
                "text": "**Java 8–21 release notes**: docs.oracle.com/en/java/javase → Release Notes",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t110"
              },
              {
                "text": "**Inside the JVM (Heap, GC)**: \"Java Performance\" by Scott Oaks (O'Reilly) — Chapters 5–8",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t111"
              },
              {
                "text": "**Project Loom**: openjdk.org/projects/loom → JEP 444 (Virtual Threads)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t112"
              },
              {
                "text": "**Effective Java 3rd Edition**: Bloch — Items 15–23 (Classes), 49–56 (Methods), 78–84 (Concurrency)",
                "tags": [
                  "Concurrency"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t113"
              },
              {
                "text": "**jcmd reference**: baeldung.com/jcmd-command",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t114"
              },
              {
                "text": "**Spring Boot Docs**: docs.spring.io/spring-boot/docs/current/reference/html",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t115"
              },
              {
                "text": "**Spring Security Architecture**: spring.io/guides/topicals/spring-security-architecture",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t116"
              },
              {
                "text": "**Spring Data JPA**: docs.spring.io/spring-data/jpa/docs/current/reference/html",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t117"
              },
              {
                "text": "**Spring Boot Testing**: baeldung.com/spring-boot-testing",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t118"
              },
              {
                "text": "**JWT with Spring Security**: github.com/jwtk/jjwt (JJWT library docs)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t119"
              },
              {
                "text": "**Kafka Official Docs**: kafka.apache.org/documentation",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t120"
              },
              {
                "text": "**Confluent Kafka Fundamentals** (free course): developer.confluent.io",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t121"
              },
              {
                "text": "**Kafka: The Definitive Guide** (free PDF on Confluent): comprehensive reference",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t122"
              },
              {
                "text": "**Spring Kafka Docs**: docs.spring.io/spring-kafka/docs/current/reference/html",
                "tags": [
                  "Kafka"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t123"
              },
              {
                "text": "**Outbox Pattern**: microservices.io/patterns/data/transactional-outbox.html",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t124"
              },
              {
                "text": "**Kubernetes Official Docs**: kubernetes.io/docs/home",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t125"
              },
              {
                "text": "**CKAD practice**: killer.sh (exam simulator — excellent for K8s concepts)",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t126"
              },
              {
                "text": "**OpenShift Docs**: docs.openshift.com",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t127"
              },
              {
                "text": "**Azure AKS Docs**: learn.microsoft.com/en-us/azure/aks",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t128"
              },
              {
                "text": "**Helm Docs**: helm.sh/docs",
                "tags": [
                  "K8s"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t129"
              },
              {
                "text": "**ByteByteGo System Design 101**: github.com/ByteByteGoHq/system-design-101 (GitHub — free)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t130"
              },
              {
                "text": "**ByteByteGo Newsletter**: bytebytego.com (weekly system design content)",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t131"
              },
              {
                "text": "**Designing Data-Intensive Applications (DDIA)**: Martin Kleppmann — the most important book for HLD; focus Chapters 5–9",
                "tags": [
                  "HLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t132"
              },
              {
                "text": "**High Scalability Blog**: highscalability.com — real-world architecture case studies",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t133"
              },
              {
                "text": "**Engineering Blogs**: engineering.fb.com, netflixtechblog.com, engineering.atspotify.com",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t134"
              },
              {
                "text": "**NeetCode.io**: neetcode.io — problem lists organized by pattern (use the Roadmap)",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t135"
              },
              {
                "text": "**NeetCode YouTube**: youtube.com/@NeetCode — clean explanations for every LeetCode problem in this plan",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t136"
              },
              {
                "text": "**LeetCode**: leetcode.com — target the NeetCode 150 list; track with this document's tracker",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t137"
              },
              {
                "text": "**Grokking DSA Patterns**: educative.io/courses/grokking-the-coding-interview — pattern-based approach",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t138"
              },
              {
                "text": "**Competitive Programmer's Handbook**: cses.fi/book/book.pdf (free PDF) — deeper algorithm theory",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t139"
              },
              {
                "text": "**Refactoring.Guru**: refactoring.guru/design-patterns — clean visual explanations with Java code for all 23 GoF patterns",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t140"
              },
              {
                "text": "**Head First Design Patterns** (O'Reilly): excellent for intuition; Chapters 1–14",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t141"
              },
              {
                "text": "**LLD GitHub repository**: github.com/ashishps1/awesome-low-level-design — Java implementations of common LLD problems",
                "tags": [
                  "LLD"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t142"
              },
              {
                "text": "**Amazon Leadership Principles**: amazon.jobs/content/en/our-workplace/leadership-principles — study if targeting Amazon or Amazon-style companies",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t143"
              },
              {
                "text": "**STAR method guide**: themuse.com/advice/star-interview-method",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t144"
              },
              {
                "text": "**Pramp**: pramp.com — free peer mock interviews (DSA + behavioral)",
                "tags": [
                  "STAR"
                ],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t145"
              },
              {
                "text": "**Interviewing.io**: interviewing.io — anonymous mock interviews with engineers from top companies",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t146"
              },
              {
                "text": "**Micrometer Docs**: micrometer.io/docs/reference/java",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t147"
              },
              {
                "text": "**Prometheus + Spring Boot**: docs.spring.io/spring-boot/docs/current/reference/html/actuator.html",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t148"
              },
              {
                "text": "**Java Flight Recorder Guide**: baeldung.com/java-flight-recorder-monitoring",
                "tags": [],
                "leetcodeNum": null,
                "difficulty": null,
                "id": "w16-sun-s0-t149"
              }
            ]
          }
        ]
      }
    ]
  }
],
};

export default roadmap;
