---
title: ReRealms Plugin
draft: false
tags:
  - plugin
  - dev-journal
aliases:
  - rerealms
---
This article tries summarizes my thought process in an understandable way. 

# What should it do?

We want to achieve [[Multi-Server Compatibility]]. 
That requires the files (worlds and templates) to be stored externally. The most practical solution for a big server is probably [[SFTP]], but for smaller servers which lack on resources and only want a single server, it should be possible without setting up SFTP.

![[realms_laoding_strategy.svg]]



### Dealing with Race Conditions 
By having multiple Realms-Servers, conflicts about the data ownership might arise.
The scenario involves race conditions where multiple servers might attempt to acquire the same lock simultaneously. A robust locking mechanism is needed to ensure that only one server acquires the lock at any time to maintain data integrity and prevent conflicts.

Redis allows lock management through **atomic operations**:
- The `SET key value NX EX 300` command is central:
    - **NX** ensures the lock is only set if the key doesn’t already exist (no overwrite).
    - **EX 300** sets an expiration time (300 seconds here) to avoid indefinite locks (preventing deadlocks).
- The `EXPIRE` command refreshes a lock if it’s still held and needs to extend its lifetime.
- This ensures a "first come, first serve" mechanism, where only one server can "get the dish" at a time, and the lock eventually times out if not explicitly released or refreshed.
  This is important for unresponding realm instances.


> [!todo]
> To be continued....

