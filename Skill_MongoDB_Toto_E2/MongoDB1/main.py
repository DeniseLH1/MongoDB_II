from typing import List, Dict

def total_factura(items: List[Dict]) -> float:
    return sum(item["price"] * item["qty"] for item in items)